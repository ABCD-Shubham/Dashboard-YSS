import React, { useState, useEffect } from 'react';
import { applyTheme } from '../utils/theme';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check local storage or system preference on mount
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'true') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark-mode');
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('darkMode', newMode.toString());

        // Apply theme variables - always use midnight-electric
        const currentTheme = 'midnight-electric';
        localStorage.setItem('selectedTheme', currentTheme);
        applyTheme(currentTheme, newMode);

        // Dispatch event for other components
        const event = new CustomEvent('themeChange', { detail: { darkMode: newMode } });
        window.dispatchEvent(event);
    };

    return (
        <div className="theme-toggle-wrapper" onClick={toggleDarkMode}>
            <div className={`toggle-switch ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="toggle-background">
                    {/* Stars for Dark Mode */}
                    <div className="star star-1"></div>
                    <div className="star star-2"></div>
                    <div className="star star-3"></div>
                    <div className="star star-4"></div>
                    <div className="star star-5"></div>

                    {/* Clouds for Light Mode */}
                    <div className="cloud cloud-1"></div>
                    <div className="cloud cloud-2"></div>
                    <div className="cloud cloud-3"></div>
                </div>
                <div className="toggle-circle">
                    {isDarkMode ? (
                        <div className="moon-icon">
                            <div className="moon-crater crater-1"></div>
                            <div className="moon-crater crater-2"></div>
                            <div className="moon-crater crater-3"></div>
                        </div>
                    ) : (
                        <div className="sun-icon">
                            <div className="sun-rays"></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ThemeToggle;
