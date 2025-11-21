import React, { useState, useEffect } from 'react';
import { applyTheme } from '../utils/theme';

const Settings = () => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

    // Load midnight-electric theme on mount and listen for dark mode changes
    useEffect(() => {
        // Always use midnight-electric theme
        const fixedTheme = 'midnight-electric';
        localStorage.setItem('selectedTheme', fixedTheme);
        applyTheme(fixedTheme, isDarkMode);

        const handleThemeChange = (e) => {
            setIsDarkMode(e.detail.darkMode);
            applyTheme(fixedTheme, e.detail.darkMode);
        };

        window.addEventListener('themeChange', handleThemeChange);
        return () => window.removeEventListener('themeChange', handleThemeChange);
    }, [isDarkMode]);

    return (
        <div className="settings-page">
            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Settings</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Configure your YSS platform preferences
            </p>

            <div style={{ display: 'grid', gap: '2rem' }}>
                <div className="card">
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Appearance</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            Use the toggle in the top-right corner to switch between light and dark mode.
                        </p>
                        <div style={{
                            display: 'inline-block',
                            padding: '1rem 2rem',
                            borderRadius: 'var(--radius-md)',
                            background: 'rgba(78, 168, 255, 0.1)',
                            border: '2px solid rgba(78, 168, 255, 0.3)'
                        }}>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                                Current Theme: <strong style={{ color: 'var(--primary)' }}>Midnight Electric</strong>
                            </p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.5rem 0 0 0' }}>
                                Mode: <strong style={{ color: 'var(--primary)' }}>{isDarkMode ? 'Dark' : 'Light'}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
