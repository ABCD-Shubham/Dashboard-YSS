import React from 'react';

const Inbox = () => {
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
            backgroundColor: '#E75A9D' // Pink background matching image
        }}>
            <img
                src="/screenshots/coming-soon.png"
                alt="Inbox & Settings Coming Soon"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain' // Changed from contain to cover
                }}
            />
        </div>
    );
};

export default Inbox;
