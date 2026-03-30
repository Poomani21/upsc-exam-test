import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getQuestionsByFilter, Question } from '@/data/questions';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Clock, ChevronLeft, ChevronRight, Flag, BookOpen, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export default function ExamMode() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, addTestResult } = useAuth();

  const subject = searchParams.get('subject') || '';
  const chapter = searchParams.get('chapter') || '';
  const difficulty = searchParams.get('difficulty') || '';
  const count = parseInt(searchParams.get('count') || '50');

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [flagged, setFlagged] = useState<Set<string>>(new Set());

  useEffect(() => {
    const qs = getQuestionsByFilter(subject || undefined, chapter || undefined, difficulty || undefined, count);
    setQuestions(qs);
    const initial: Record<string, number | null> = {};
    qs.forEach(q => { initial[q.id] = null; });
    setAnswers(initial);
  }, [subject, chapter, difficulty, count]);

  useEffect(() => {
    if (isSubmitted) return;
    const interval = setInterval(() => setTimeElapsed(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, [isSubmitted]);

  const currentQ = questions[currentIndex];

  const selectAnswer = (optionIdx: number) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [currentQ.id]: prev[currentQ.id] === optionIdx ? null : optionIdx }));
  };

  const toggleFlag = () => {
    setFlagged(prev => {
      const next = new Set(prev);
      if (next.has(currentQ.id)) next.delete(currentQ.id);
      else next.add(currentQ.id);
      return next;
    });
  };

  const submitTest = useCallback(() => {
    setIsSubmitted(true);
    const correct = questions.filter(q => answers[q.id] === q.correctAnswer).length;
    const wrong = questions.filter(q => answers[q.id] !== null && answers[q.id] !== q.correctAnswer).length;
    const unanswered = questions.filter(q => answers[q.id] === null).length;

    if (user) {
      addTestResult({
        subject: subject || 'Mixed',
        chapter: chapter || 'All',
        difficulty: difficulty || 'Mixed',
        totalQuestions: questions.length,
        correctAnswers: correct,
        wrongAnswers: wrong,
        unanswered,
        percentage: Math.round((correct / questions.length) * 100),
        timeTaken: timeElapsed,
        answers,
      });
    }
  }, [questions, answers, timeElapsed, user, addTestResult, subject, chapter, difficulty]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">No Questions Found</h2>
          <p className="text-muted-foreground mb-4">Try adjusting your filter criteria</p>
          <Button onClick={() => navigate('/create-test')} className="hero-gradient text-primary-foreground border-0">Go Back</Button>
        </div>
      </div>
    );
  }

  const answered = Object.values(answers).filter(a => a !== null).length;
  const correctCount = questions.filter(q => answers[q.id] === q.correctAnswer).length;
  const wrongCount = questions.filter(q => answers[q.id] !== null && answers[q.id] !== q.correctAnswer).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="sticky top-0 z-50 glass-effect border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              <ChevronLeft className="w-4 h-4 mr-1" /> Exit
            </Button>
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <BookOpen className="w-4 h-4" />
              <span>{subject || 'Mixed'} {chapter && `· ${chapter}`}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-sm font-medium">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="font-display">{formatTime(timeElapsed)}</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {answered}/{questions.length} answered
            </div>
            {!isSubmitted && (
              <Button onClick={submitTest} className="gold-gradient text-secondary-foreground border-0 font-semibold">
                Submit Test
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* Question area */}
        <div className="flex-1">
          {isSubmitted && (
            <div className="mb-6 p-6 rounded-xl bg-card shadow-card">
              <h3 className="font-display font-bold text-xl text-foreground mb-4">Test Results</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 rounded-lg bg-accent/10">
                  <div className="text-2xl font-display font-bold text-accent">{correctCount}</div>
                  <div className="text-xs text-muted-foreground">Correct</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-destructive/10">
                  <div className="text-2xl font-display font-bold text-destructive">{wrongCount}</div>
                  <div className="text-xs text-muted-foreground">Wrong</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted">
                  <div className="text-2xl font-display font-bold text-muted-foreground">{questions.length - answered}</div>
                  <div className="text-xs text-muted-foreground">Unanswered</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary/10">
                  <div className="text-2xl font-display font-bold text-secondary">{Math.round((correctCount / questions.length) * 100)}%</div>
                  <div className="text-xs text-muted-foreground">Score</div>
                </div>
              </div>
              <div className="mt-4 flex gap-3">
                <Button onClick={() => navigate('/dashboard')} variant="outline">View Dashboard</Button>
                <Button onClick={() => navigate('/create-test')} className="hero-gradient text-primary-foreground border-0">New Test</Button>
              </div>
            </div>
          )}

          <div className="bg-card rounded-xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-muted-foreground">Question {currentIndex + 1} of {questions.length}</span>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full ${currentQ.difficulty === 'easy' ? 'bg-accent/20 text-accent' : currentQ.difficulty === 'medium' ? 'bg-secondary/20 text-secondary' : 'bg-destructive/20 text-destructive'}`}>
                  {currentQ.difficulty}
                </span>
                <Button variant="ghost" size="sm" onClick={toggleFlag} className={flagged.has(currentQ.id) ? 'text-secondary' : 'text-muted-foreground'}>
                  <Flag className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-6 leading-relaxed">{currentQ.question}</h3>

            <div className="space-y-3">
              {currentQ.options.map((opt, idx) => {
                const isSelected = answers[currentQ.id] === idx;
                const isCorrect = isSubmitted && idx === currentQ.correctAnswer;
                const isWrong = isSubmitted && isSelected && idx !== currentQ.correctAnswer;

                return (
                  <button
                    key={idx}
                    onClick={() => selectAnswer(idx)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      isCorrect ? 'border-accent bg-accent/10' :
                      isWrong ? 'border-destructive bg-destructive/10' :
                      isSelected ? 'border-primary bg-primary/5' :
                      'border-border hover:border-primary/50 hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${
                        isCorrect ? 'bg-accent text-accent-foreground' :
                        isWrong ? 'bg-destructive text-destructive-foreground' :
                        isSelected ? 'bg-primary text-primary-foreground' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : isWrong ? <XCircle className="w-4 h-4" /> : String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-foreground">{opt}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {isSubmitted && (
              <div className="mt-4">
                <Button variant="ghost" size="sm" onClick={() => setShowExplanation(!showExplanation)}>
                  {showExplanation ? 'Hide' : 'Show'} Explanation
                </Button>
                {showExplanation && (
                  <div className="mt-3 p-4 rounded-lg bg-muted/50 text-sm text-foreground leading-relaxed">
                    {currentQ.explanation}
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))} disabled={currentIndex === 0}>
                <ChevronLeft className="w-4 h-4 mr-1" /> Previous
              </Button>
              <Button variant="outline" onClick={() => { setCurrentIndex(Math.min(questions.length - 1, currentIndex + 1)); setShowExplanation(false); }} disabled={currentIndex === questions.length - 1}>
                Next <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Question navigator */}
        <div className="lg:w-72 shrink-0">
          <div className="bg-card rounded-xl p-4 shadow-card sticky top-20">
            <h4 className="font-display font-semibold text-foreground mb-3">Question Navigator</h4>
            <div className="grid grid-cols-8 lg:grid-cols-5 gap-1.5">
              {questions.map((q, i) => {
                const isAnswered = answers[q.id] !== null;
                const isCurrent = i === currentIndex;
                const isFlagged = flagged.has(q.id);
                const isCorrectAfterSubmit = isSubmitted && answers[q.id] === q.correctAnswer;
                const isWrongAfterSubmit = isSubmitted && answers[q.id] !== null && answers[q.id] !== q.correctAnswer;

                return (
                  <button
                    key={q.id}
                    onClick={() => { setCurrentIndex(i); setShowExplanation(false); }}
                    className={`w-full aspect-square rounded-lg text-xs font-semibold transition-all ${
                      isCurrent ? 'ring-2 ring-primary' : ''
                    } ${
                      isCorrectAfterSubmit ? 'bg-accent text-accent-foreground' :
                      isWrongAfterSubmit ? 'bg-destructive text-destructive-foreground' :
                      isAnswered ? 'bg-primary text-primary-foreground' :
                      isFlagged ? 'bg-secondary text-secondary-foreground' :
                      'bg-muted text-muted-foreground'
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 space-y-1 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-primary" /> Answered</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-muted" /> Not Answered</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-secondary" /> Flagged</div>
              {isSubmitted && (
                <>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-accent" /> Correct</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-destructive" /> Wrong</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
