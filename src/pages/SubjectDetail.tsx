import { useParams, useNavigate } from 'react-router-dom';
import { subjects, questionBank } from '@/data/questions';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play } from 'lucide-react';

export default function SubjectDetail() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const subject = subjects.find(s => s.id === subjectId);

  if (!subject) return <div>Subject not found</div>;

  const getChapterQuestionCount = (chapter: string) => {
    return questionBank.filter(q => q.subject === subjectId && q.chapter === chapter).length;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <Button variant="ghost" onClick={() => navigate('/subjects')} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Subjects
        </Button>
        <div className="flex items-center gap-4 mb-8">
          <div className="text-5xl">{subject.icon}</div>
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground">{subject.name}</h2>
            <p className="text-muted-foreground">{subject.totalQuestions}+ questions · {subject.chapters.length} chapters</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {subject.chapters.map(chapter => {
            const count = getChapterQuestionCount(chapter);
            return (
              <div key={chapter} className="bg-card rounded-xl p-6 shadow-card flex items-center justify-between">
                <div>
                  <h4 className="font-display font-semibold text-foreground text-lg">{chapter}</h4>
                  <p className="text-sm text-muted-foreground">{count} questions available</p>
                  <div className="flex gap-2 mt-2">
                    {['easy', 'medium', 'hard'].map(d => (
                      <span key={d} className={`text-xs px-2 py-0.5 rounded-full ${d === 'easy' ? 'bg-accent/20 text-accent' : d === 'medium' ? 'bg-secondary/20 text-secondary' : 'bg-destructive/20 text-destructive'}`}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  onClick={() => navigate(`/exam?subject=${subjectId}&chapter=${encodeURIComponent(chapter)}&count=50`)}
                  className="hero-gradient text-primary-foreground border-0"
                >
                  <Play className="w-4 h-4 mr-1" /> Start
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Button onClick={() => navigate(`/exam?subject=${subjectId}&count=50`)} className="gold-gradient text-secondary-foreground border-0 h-12 px-8 font-semibold">
            Full Subject Test (50 Questions)
          </Button>
        </div>
      </div>
    </div>
  );
}
