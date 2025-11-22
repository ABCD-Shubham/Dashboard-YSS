import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Settings, Inbox, LogOut } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Leads', path: '/leads', icon: Users },
    { name: 'Inbox', path: '/inbox', icon: Inbox },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src="https://www.el2m.com" alt="YSS Logo" className="logo-img" />
        <div className="logo-text-wrapper">
          <span className="logo-text">YSS</span>
          <span className="logo-subtitle">Your Salon Support</span>
        </div>
      </div>

      <nav className="nav-list">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <item.icon className="nav-icon" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="logout-container">
        <div className="logout-item">
          <LogOut className="nav-icon" />
          <span>Log out</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
