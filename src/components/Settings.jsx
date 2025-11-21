import React, { useEffect } from 'react';
import { applyTheme } from '../utils/theme';

const Settings = () => {
    // Load midnight-electric theme on mount
    useEffect(() => {
        const fixedTheme = 'midnight-electric';
        localStorage.setItem('selectedTheme', fixedTheme);
        applyTheme(fixedTheme);
    }, []);

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
                            YSS platform uses the Midnight Electric theme for a clean and modern interface.
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
                                Mode: <strong style={{ color: 'var(--primary)' }}>Light</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
