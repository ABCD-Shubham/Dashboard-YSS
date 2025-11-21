import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Leads from './components/Leads';
import Settings from './components/Settings';
import LeadDetails from './components/LeadDetails';
import Profile from './components/Profile';
import ThemeToggle from './components/ThemeToggle';
import { applyTheme } from './utils/theme';

const App = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'midnight-electric';
    const savedMode = localStorage.getItem('darkMode') === 'true';
    localStorage.setItem('selectedTheme', 'midnight-electric'); // Always use midnight-electric
    applyTheme(savedTheme, savedMode);
  }, []);

  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <ThemeToggle />
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
