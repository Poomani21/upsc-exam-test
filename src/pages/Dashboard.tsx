import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Target, Clock, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';
import { subjects } from '@/data/questions';

export default function Dashboard() {
  const { user, testResults } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const totalTests = testResults.length;
  const avgScore = totalTests ? Math.round(testResults.reduce((a, r) => a + r.percentage, 0) / totalTests) : 0;
  const totalQuestions = testResults.reduce((a, r) => a + r.totalQuestions, 0);
  const totalTime = testResults.reduce((a, r) => a + r.timeTaken, 0);

  // Subject-wise performance
  const subjectPerf = subjects.map(s => {
    const results = testResults.filter(r => r.subject === s.id);
    const avg = results.length ? Math.round(results.reduce((a, r) => a + r.percentage, 0) / results.length) : 0;
    return { ...s, avgScore: avg, testsCount: results.length };
  });

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground">Dashboard</h2>
            <p className="text-muted-foreground">Welcome back, {user.name} {user.avatar}</p>
          </div>
          <Button onClick={() => navigate('/create-test')} className="gold-gradient text-secondary-foreground border-0 font-semibold">
            New Test <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Target, label: 'Tests Taken', value: totalTests, color: 'text-primary' },
            { icon: BarChart3, label: 'Avg Score', value: `${avgScore}%`, color: 'text-accent' },
            { icon: BookOpen, label: 'Questions', value: totalQuestions, color: 'text-secondary' },
            { icon: Clock, label: 'Time Spent', value: formatTime(totalTime), color: 'text-info' },
          ].map(s => (
            <Card key={s.label} className="shadow-card border-0">
              <CardContent className="p-6">
                <s.icon className={`w-8 h-8 ${s.color} mb-2`} />
                <div className="text-2xl font-display font-bold text-foreground">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subject Performance */}
        <Card className="shadow-card border-0 mb-8">
          <CardHeader>
            <CardTitle className="font-display flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" /> Subject-wise Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subjectPerf.map(s => (
                <div key={s.id} className="flex items-center gap-4">
                  <span className="text-2xl w-10">{s.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{s.name}</span>
                      <span className="text-sm font-display font-bold text-foreground">{s.avgScore}%</span>
                    </div>
                    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${s.avgScore >= 70 ? 'bg-accent' : s.avgScore >= 40 ? 'bg-secondary' : s.avgScore > 0 ? 'bg-destructive' : 'bg-muted'}`}
                        style={{ width: `${s.avgScore}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{s.testsCount} test{s.testsCount !== 1 ? 's' : ''} taken</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Tests */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="font-display">Recent Tests</CardTitle>
          </CardHeader>
          <CardContent>
            {testResults.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No tests taken yet. Start your first test!</p>
                <Button onClick={() => navigate('/create-test')} className="mt-4 hero-gradient text-primary-foreground border-0">
                  Create Test
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {[...testResults].reverse().slice(0, 10).map(r => (
                  <div key={r.id} className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                    <div>
                      <div className="font-medium text-foreground">{r.subject} {r.chapter !== 'All' ? `· ${r.chapter}` : ''}</div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(r.date).toLocaleDateString()} · {r.totalQuestions} questions · {r.difficulty}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-display font-bold ${r.percentage >= 70 ? 'text-accent' : r.percentage >= 40 ? 'text-secondary' : 'text-destructive'}`}>
                        {r.percentage}%
                      </div>
                      <div className="text-xs text-muted-foreground">{r.correctAnswers}/{r.totalQuestions} correct</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
