import React from 'react';

const Settings = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 'var(--sidebar-width, 280px)',
            right: 0,
            bottom: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            margin: 0,
            backgroundColor: '#d55593ff'  // Pink background matching image
        }}>
            <img
                src="/screenshots/coming-soon.png"
                alt="Inbox & Settings Coming Soon"
                style={{
                    width: '90%',
                    height: '105%',
                    objectFit: 'contain'
                }}
            />
        </div>
    );
};

export default Settings;
