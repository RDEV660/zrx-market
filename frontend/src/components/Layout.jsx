import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Layout.css';

const Layout = ({ children }) => {
  const { user, logout, isModerator, loading } = useAuth();
  const location = useLocation();

  // Prevent crashes if isModerator fails
  let userIsModerator = false;
  try {
    userIsModerator = isModerator();
  } catch (error) {
    console.error('Error checking moderator status:', error);
  }

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            ZRX MARKET
          </Link>
          <div className="nav-links">
            <Link to="/trades" className={location.pathname === '/trades' ? 'active' : ''}>
              Trades
            </Link>
            {user && (
              <>
                <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
                  Dashboard
                </Link>
                <Link to="/middlemen" className={location.pathname === '/middlemen' ? 'active' : ''}>
                  Middleman
                </Link>
                <Link to="/reports" className={location.pathname === '/reports' ? 'active' : ''}>
                  Report
                </Link>
                {userIsModerator && (
                  <Link to="/admin" className={location.pathname === '/admin' ? 'active' : ''}>
                    Admin
                  </Link>
                )}
              </>
            )}
          </div>
          <div className="nav-auth">
            {user ? (
              <div className="user-menu">
                <img
                  src={user.avatar || 'https://cdn.discordapp.com/embed/avatars/0.png'}
                  alt={user.username}
                  className="user-avatar"
                />
                <span className="user-name">{user.username}</span>
                {user.verified === 1 && <span className="verified-badge">✓</span>}
                <button onClick={logout} className="logout-btn">
                  Logout
                </button>
              </div>
            ) : (
              <a href="/auth/discord" className="login-btn">
                Login with Discord
              </a>
            )}
          </div>
        </div>
      </nav>
      <main className="main-content">{children}</main>
      <footer className="footer">
        <p>&copy; 2024 ZRX Market. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;

