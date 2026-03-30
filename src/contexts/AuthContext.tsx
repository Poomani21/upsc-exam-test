import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isAdmin: boolean;
}

interface TestResult {
  id: string;
  userId: string;
  subject: string;
  chapter: string;
  difficulty: string;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  unanswered: number;
  percentage: number;
  timeTaken: number;
  date: string;
  answers: Record<string, number | null>;
}

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  login: (email: string, password: string) => boolean;
  loginWithGoogle: () => void;
  logout: () => void;
  testResults: TestResult[];
  addTestResult: (result: Omit<TestResult, 'id' | 'userId' | 'date'>) => void;
  allUsers: User[];
  allResults: TestResult[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_EMAIL = 'admin@admin.com';
const ADMIN_PASSWORD = '123456';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('upsc_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [testResults, setTestResults] = useState<TestResult[]>(() => {
    const saved = localStorage.getItem('upsc_results');
    return saved ? JSON.parse(saved) : [];
  });

  const [allUsers, setAllUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('upsc_all_users');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (user) localStorage.setItem('upsc_user', JSON.stringify(user));
    else localStorage.removeItem('upsc_user');
  }, [user]);

  useEffect(() => {
    localStorage.setItem('upsc_results', JSON.stringify(testResults));
  }, [testResults]);

  useEffect(() => {
    localStorage.setItem('upsc_all_users', JSON.stringify(allUsers));
  }, [allUsers]);

  const login = (email: string, password: string): boolean => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const adminUser: User = {
        id: 'admin-1',
        name: 'Admin',
        email: ADMIN_EMAIL,
        avatar: '👑',
        isAdmin: true,
      };
      setUser(adminUser);
      updateAllUsers(adminUser);
      return true;
    }
    return false;
  };

  const loginWithGoogle = () => {
    const googleUser: User = {
      id: `user-${Date.now()}`,
      name: 'UPSC Aspirant',
      email: 'aspirant@gmail.com',
      avatar: '🎓',
      isAdmin: false,
    };
    setUser(googleUser);
    updateAllUsers(googleUser);
  };

  const updateAllUsers = (u: User) => {
    setAllUsers(prev => {
      const exists = prev.find(p => p.email === u.email);
      if (exists) return prev;
      return [...prev, u];
    });
  };

  const logout = () => {
    setUser(null);
  };

  const addTestResult = (result: Omit<TestResult, 'id' | 'userId' | 'date'>) => {
    if (!user) return;
    const newResult: TestResult = {
      ...result,
      id: `result-${Date.now()}`,
      userId: user.id,
      date: new Date().toISOString(),
    };
    setTestResults(prev => [...prev, newResult]);
  };

  const isAdmin = user?.isAdmin ?? false;

  return (
    <AuthContext.Provider value={{
      user,
      isAdmin,
      login,
      loginWithGoogle,
      logout,
      testResults: testResults.filter(r => r.userId === user?.id),
      addTestResult,
      allUsers,
      allResults: testResults,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
