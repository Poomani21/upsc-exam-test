import { useNavigate } from 'react-router-dom';
import { subjects } from '@/data/questions';
import Header from '@/components/Header';

export default function Subjects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-display font-bold text-foreground mb-2">All Subjects</h2>
        <p className="text-muted-foreground mb-8">Choose a subject to start topic-wise practice (50 questions per section)</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map(s => (
            <div key={s.id} onClick={() => navigate(`/subjects/${s.id}`)} className="bg-card rounded-xl p-6 shadow-card cursor-pointer hover:shadow-elevated transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">{s.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.totalQuestions}+ questions across {s.chapters.length} chapters</p>
              <div className="space-y-2">
                {s.chapters.map(c => (
                  <div key={c} className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <span className="text-sm text-foreground">{c}</span>
                    <span className="text-xs text-muted-foreground">50 Qs</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
