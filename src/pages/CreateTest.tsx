import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { subjects } from '@/data/questions';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Play } from 'lucide-react';

export default function CreateTest() {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questionCount, setQuestionCount] = useState([50]);

  const currentSubject = subjects.find(s => s.id === selectedSubject);

  const startTest = () => {
    const params = new URLSearchParams();
    if (selectedSubject) params.set('subject', selectedSubject);
    if (selectedChapter) params.set('chapter', selectedChapter);
    if (difficulty) params.set('difficulty', difficulty);
    params.set('count', String(questionCount[0]));
    navigate(`/exam?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-4 shadow-glow">
            <Zap className="w-8 h-8 text-secondary-foreground" />
          </div>
          <h2 className="text-3xl font-display font-bold text-foreground">Create Your Test</h2>
          <p className="text-muted-foreground mt-2">Customize your practice session</p>
        </div>

        <Card className="shadow-elevated border-0">
          <CardHeader>
            <CardTitle className="font-display">Test Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Subject</Label>
              <Select value={selectedSubject} onValueChange={v => { setSelectedSubject(v); setSelectedChapter(''); }}>
                <SelectTrigger><SelectValue placeholder="All subjects (mixed)" /></SelectTrigger>
                <SelectContent>
                  {subjects.map(s => (
                    <SelectItem key={s.id} value={s.id}>{s.icon} {s.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {currentSubject && (
              <div className="space-y-2">
                <Label>Chapter</Label>
                <Select value={selectedChapter} onValueChange={setSelectedChapter}>
                  <SelectTrigger><SelectValue placeholder="All chapters" /></SelectTrigger>
                  <SelectContent>
                    {currentSubject.chapters.map(c => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-2">
              <Label>Difficulty</Label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger><SelectValue placeholder="All levels (mixed)" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">🟢 Easy</SelectItem>
                  <SelectItem value="medium">🟡 Medium</SelectItem>
                  <SelectItem value="hard">🔴 Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label>Number of Questions</Label>
                <span className="text-2xl font-display font-bold text-foreground">{questionCount[0]}</span>
              </div>
              <Slider value={questionCount} onValueChange={setQuestionCount} min={5} max={100} step={5} className="py-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>5</span><span>25</span><span>50</span><span>75</span><span>100</span>
              </div>
            </div>

            <Button onClick={startTest} className="w-full h-14 hero-gradient text-primary-foreground border-0 text-lg font-semibold">
              <Play className="w-5 h-5 mr-2" /> Start Test
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
