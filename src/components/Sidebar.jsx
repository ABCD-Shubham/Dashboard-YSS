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
        <img src="/assets/logo.png" alt="YSS Logo" className="logo-img" />
        <span className="logo-text">YSS</span>
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
