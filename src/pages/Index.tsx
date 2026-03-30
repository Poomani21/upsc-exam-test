import { useNavigate } from 'react-router-dom';
import { subjects } from '@/data/questions';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import { ArrowRight, BookOpen, Trophy, BarChart3, Brain, Zap, Target } from 'lucide-react';

export default function Index() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const stats = [
    { icon: BookOpen, label: 'Questions', value: '21,000+', color: 'text-info' },
    { icon: Brain, label: 'Subjects', value: '7', color: 'text-accent' },
    { icon: Target, label: 'Chapters', value: '35+', color: 'text-secondary' },
    { icon: Trophy, label: 'Students', value: '10K+', color: 'text-warning' },
  ];

  const features = [
    { icon: Zap, title: 'Custom Tests', desc: 'Choose difficulty, topics & question count', color: 'from-amber-500/20 to-orange-500/20' },
    { icon: BarChart3, title: 'Performance Analysis', desc: 'Track your progress with detailed analytics', color: 'from-blue-500/20 to-indigo-500/20' },
    { icon: Target, title: 'Exam Mode', desc: 'Simulate real UPSC exam conditions', color: 'from-emerald-500/20 to-green-500/20' },
    { icon: BookOpen, title: 'Explanations', desc: 'Detailed answers for every question', color: 'from-violet-500/20 to-purple-500/20' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="hero-gradient py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute w-2 h-2 bg-primary-foreground rounded-full animate-float" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 6}s` }} />
          ))}
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-sm text-primary-foreground/90 font-medium">21,000+ Questions with Explanations</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Master Your <br /><span className="text-gradient">UPSC Preparation</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Create custom tests, practice subject-wise, and analyze your performance with our comprehensive question bank covering all UPSC subjects.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={() => navigate('/create-test')} className="gold-gradient text-secondary-foreground border-0 h-12 px-8 text-base font-semibold shadow-glow hover:scale-105 transition-transform">
              Create Your Test <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button onClick={() => navigate('/subjects')} variant="outline" className="h-12 px-8 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Browse Subjects
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 -mt-8 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(s => (
              <div key={s.label} className="bg-card rounded-xl p-6 shadow-card text-center animate-slide-up">
                <s.icon className={`w-8 h-8 mx-auto mb-2 ${s.color}`} />
                <div className="text-2xl font-display font-bold text-foreground">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-display font-bold text-center text-foreground mb-12">Why Choose UPSC Prep?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(f => (
              <div key={f.title} className={`rounded-xl p-6 bg-gradient-to-br ${f.color} border border-border/50`}>
                <f.icon className="w-10 h-10 text-foreground mb-4" />
                <h4 className="text-lg font-display font-semibold text-foreground mb-2">{f.title}</h4>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Preview */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-display font-bold text-center text-foreground mb-4">Subject-wise Practice</h3>
          <p className="text-center text-muted-foreground mb-12">Each section has 50 questions with detailed explanations</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {subjects.map(s => (
              <div key={s.id} onClick={() => navigate(`/subjects/${s.id}`)} className="bg-card rounded-xl p-5 shadow-card cursor-pointer hover:shadow-elevated transition-all hover:-translate-y-1 group">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h4 className="font-display font-semibold text-foreground mb-1">{s.name}</h4>
                <p className="text-xs text-muted-foreground mb-3">{s.chapters.length} chapters · {s.totalQuestions}+ questions</p>
                <div className="flex flex-wrap gap-1">
                  {s.chapters.slice(0, 3).map(c => (
                    <span key={c} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{c}</span>
                  ))}
                  {s.chapters.length > 3 && <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">+{s.chapters.length - 3}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-display font-bold text-foreground mb-4">Ready to Start?</h3>
          <p className="text-muted-foreground mb-8">Create your first custom test and begin your UPSC journey</p>
          <Button onClick={() => navigate(user ? '/create-test' : '/login')} className="gold-gradient text-secondary-foreground border-0 h-12 px-8 text-base font-semibold shadow-glow">
            {user ? 'Create Test Now' : 'Get Started Free'} <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="hero-gradient py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm">© 2026 UPSC Prep. All rights reserved. 21,000+ questions covering all UPSC subjects.</p>
        </div>
      </footer>
    </div>
  );
}
