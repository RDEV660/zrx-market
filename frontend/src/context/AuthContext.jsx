import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    
    // Also check auth when window regains focus (after Discord redirect)
    const handleFocus = () => {
      if (!user && !loading) {
        checkAuth();
      }
    };
    window.addEventListener('focus', handleFocus);
    
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const checkAuth = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/auth/me', {
        withCredentials: true,
        timeout: 10000
      });
      
      if (response.data && response.data.user) {
        setUser(response.data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Auth check error:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = () => {
    window.location.href = '/auth/discord';
  };

  const logout = async () => {
    try {
      await axios.post('/auth/logout');
      setUser(null);
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const isModerator = () => {
    if (!user || !user.roles) return false;
    try {
      const roles = typeof user.roles === 'string' ? JSON.parse(user.roles) : user.roles;
      // Get moderator role ID from environment or use default
      const moderatorRoleId = import.meta.env.VITE_MODERATOR_ROLE_ID || '1391972977586864218';
      return Array.isArray(roles) && roles.includes(moderatorRoleId);
    } catch (error) {
      console.error('Error parsing roles:', error);
      return false;
    }
  };

  const isVerified = () => {
    return user && user.verified === 1;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        checkAuth,
        isModerator,
        isVerified
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

