import React from 'react';

const Inbox = () => {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            margin: 0,
            marginLeft: '-2rem', // Offset the main-content padding
            marginTop: '-2rem',
            marginRight: '-2rem',
            marginBottom: '-2rem'
        }}>
            <img
                src="/screenshots/coming-soon.png"
                alt="Inbox & Settings Coming Soon"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover' // Changed from contain to cover
                }}
            />
        </div>
    );
};

export default Inbox;
