import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, BarChart3, BookOpen, TrendingUp } from 'lucide-react';
import { subjects } from '@/data/questions';

export default function Admin() {
  const { user, isAdmin, allUsers, allResults } = useAuth();
  const navigate = useNavigate();

  if (!user || !isAdmin) {
    navigate('/login');
    return null;
  }

  const totalTests = allResults.length;
  const avgScore = totalTests ? Math.round(allResults.reduce((a, r) => a + r.percentage, 0) / totalTests) : 0;

  // Per-user stats
  const userStats = allUsers.map(u => {
    const results = allResults.filter(r => r.userId === u.id);
    const avg = results.length ? Math.round(results.reduce((a, r) => a + r.percentage, 0) / results.length) : 0;
    return { ...u, testsCount: results.length, avgScore: avg, results };
  });

  // Subject performance across all users
  const subjectStats = subjects.map(s => {
    const results = allResults.filter(r => r.subject === s.id);
    const avg = results.length ? Math.round(results.reduce((a, r) => a + r.percentage, 0) / results.length) : 0;
    return { ...s, avgScore: avg, totalAttempts: results.length };
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground">Admin Panel</h2>
            <p className="text-muted-foreground">Monitor all users and performance</p>
          </div>
        </div>

        {/* Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Users, label: 'Total Users', value: allUsers.length, color: 'text-primary' },
            { icon: BookOpen, label: 'Total Tests', value: totalTests, color: 'text-accent' },
            { icon: BarChart3, label: 'Avg Score', value: `${avgScore}%`, color: 'text-secondary' },
            { icon: TrendingUp, label: 'Questions Solved', value: allResults.reduce((a, r) => a + r.totalQuestions, 0), color: 'text-info' },
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

        {/* Users */}
        <Card className="shadow-card border-0 mb-8">
          <CardHeader>
            <CardTitle className="font-display flex items-center gap-2">
              <Users className="w-5 h-5" /> All Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            {userStats.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">No users yet</p>
            ) : (
              <div className="space-y-3">
                {userStats.map(u => (
                  <div key={u.id} className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{u.avatar}</span>
                      <div>
                        <div className="font-medium text-foreground flex items-center gap-2">
                          {u.name}
                          {u.isAdmin && <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary font-semibold">Admin</span>}
                        </div>
                        <div className="text-xs text-muted-foreground">{u.email}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-display font-bold text-foreground">{u.avgScore}%</div>
                      <div className="text-xs text-muted-foreground">{u.testsCount} tests</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Subject Stats */}
        <Card className="shadow-card border-0 mb-8">
          <CardHeader>
            <CardTitle className="font-display flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-accent" /> Subject Performance (All Users)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subjectStats.map(s => (
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
                    <span className="text-xs text-muted-foreground">{s.totalAttempts} attempts</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="font-display">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            {allResults.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">No activity yet</p>
            ) : (
              <div className="space-y-3">
                {[...allResults].reverse().slice(0, 15).map(r => {
                  const u = allUsers.find(u => u.id === r.userId);
                  return (
                    <div key={r.id} className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{u?.avatar || '👤'}</span>
                        <div>
                          <div className="font-medium text-foreground text-sm">{u?.name || 'Unknown'}</div>
                          <div className="text-xs text-muted-foreground">{r.subject} · {r.chapter} · {new Date(r.date).toLocaleDateString()}</div>
                        </div>
                      </div>
                      <div className={`text-lg font-display font-bold ${r.percentage >= 70 ? 'text-accent' : r.percentage >= 40 ? 'text-secondary' : 'text-destructive'}`}>
                        {r.percentage}%
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
