import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, User, Shield, BarChart3, BookOpen } from 'lucide-react';

export default function Header() {
  const { user, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-display font-bold text-foreground leading-none">UPSC Prep</h1>
            <p className="text-xs text-muted-foreground">21,000+ Questions</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link to="/subjects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Subjects</Link>
          <Link to="/create-test" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Create Test</Link>
          {user && (
            <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
          )}
          {isAdmin && (
            <Link to="/admin" className="text-sm font-medium text-secondary hover:text-secondary transition-colors flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" /> Admin
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted">
                <span className="text-lg">{user.avatar}</span>
                <span className="text-sm font-medium text-foreground hidden sm:inline">{user.name}</span>
                {isAdmin && <Shield className="w-3.5 h-3.5 text-secondary" />}
              </div>
              <Button variant="ghost" size="icon" onClick={() => { logout(); navigate('/'); }}>
                <LogOut className="w-4 h-4" />
              </Button>
            </>
          ) : (
            <Button onClick={() => navigate('/login')} className="hero-gradient text-primary-foreground border-0">
              <User className="w-4 h-4 mr-2" /> Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
