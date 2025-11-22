import React from 'react';

const Settings = () => {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            margin: 0
        }}>
            <img
                src="/screenshots/coming-soon.png"
                alt="Inbox & Settings Coming Soon"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                }}
            />
        </div>
    );
};

export default Settings;
