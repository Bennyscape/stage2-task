import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SESSION_KEY = 'ticketapp_session';
const USERS_KEY = 'ticketapp_users';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY);
    if (session) {
      try {
        const sessionData = JSON.parse(session);
        if (sessionData.expiresAt > Date.now()) {
          setUser(sessionData.user);
        } else {
          localStorage.removeItem(SESSION_KEY);
        }
      } catch (error) {
        localStorage.removeItem(SESSION_KEY);
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
      const user = users.find((u: any) => u.email === email && u.password === password);

      if (user) {
        const sessionData = {
          user: { email: user.email, name: user.name },
          expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
        };
        localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
        setUser({ email: user.email, name: user.name });
        toast.success('Login successful!');
        return true;
      } else {
        toast.error('Invalid email or password.');
        return false;
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      return false;
    }
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
      
      if (users.find((u: any) => u.email === email)) {
        toast.error('Email already exists.');
        return false;
      }

      const newUser = { email, password, name };
      users.push(newUser);
      localStorage.setItem(USERS_KEY, JSON.stringify(users));

      const sessionData = {
        user: { email, name },
        expiresAt: Date.now() + 24 * 60 * 60 * 1000,
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
      setUser({ email, name });
      toast.success('Account created successfully!');
      return true;
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
    toast.info('Logged out successfully.');
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
