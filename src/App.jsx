import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Leads from './components/Leads';
import Settings from './components/Settings';
import LeadDetails from './components/LeadDetails';
import Profile from './components/Profile';
import { applyTheme } from './utils/theme';

const App = () => {
  useEffect(() => {
    // Always use midnight-electric theme in light mode
    localStorage.setItem('selectedTheme', 'midnight-electric');
    localStorage.removeItem('darkMode'); // Clean up old dark mode setting
    applyTheme('midnight-electric');
  }, []);

  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/leads/:id" element={<LeadDetails />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
