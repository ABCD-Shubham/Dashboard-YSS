import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { socialGrowthData, platformProgressData, topLeads } from '../data/mockData';
import { TrendingUp, Users, Eye, MessageCircle } from 'lucide-react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const optionsLine = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
            align: 'end',
            labels: {
                usePointStyle: true,
                boxWidth: 8,
                padding: 20,
                font: {
                    family: "'Outfit', sans-serif",
                    size: 12,
                    weight: 500
                }
            },
        },
        title: {
            display: true,
            text: 'Audience Growth',
            align: 'start',
            font: {
                family: "'Outfit', sans-serif",
                size: 18,
                weight: '600',
            },
            padding: {
                bottom: 30,
            },
            color: '#1e293b'
        },
        tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            titleColor: '#1e293b',
            bodyColor: '#64748b',
            borderColor: '#e2e8f0',
            borderWidth: 1,
            padding: 12,
            boxPadding: 6,
            usePointStyle: true,
            titleFont: { family: "'Outfit', sans-serif", size: 13, weight: 600 },
            bodyFont: { family: "'Outfit', sans-serif", size: 12 },
            displayColors: true,
        }
    },
    scales: {
        y: {
            grid: {
                borderDash: [4, 4],
                drawBorder: false,
                color: '#f1f5f9',
            },
            ticks: {
                padding: 10,
                color: '#94a3b8',
                font: { family: "'Outfit', sans-serif", size: 11 }
            },
            border: { display: false }
        },
        x: {
            grid: {
                display: false,
            },
            ticks: {
                padding: 10,
                color: '#94a3b8',
                font: { family: "'Outfit', sans-serif", size: 11 }
            },
            border: { display: false }
        },
    },
    interaction: {
        mode: 'index',
        intersect: false,
    },
    elements: {
        line: {
            tension: 0.4, // Smooth curves
        },
        point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
        }
    }
};

const optionsBar = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Platform Engagement',
            align: 'start',
            font: {
                family: "'Outfit', sans-serif",
                size: 18,
                weight: '600',
            },
            padding: {
                bottom: 30,
            },
            color: '#1e293b'
        },
        tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            titleColor: '#1e293b',
            bodyColor: '#64748b',
            borderColor: '#e2e8f0',
            borderWidth: 1,
            padding: 12,
            titleFont: { family: "'Outfit', sans-serif", size: 13, weight: 600 },
            bodyFont: { family: "'Outfit', sans-serif", size: 12 },
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                display: false, // Remove grid lines completely for cleaner look
            },
            ticks: {
                display: false // Remove y-axis labels for cleaner look
            },
            border: { display: false }
        },
        x: {
            grid: {
                display: false,
            },
            ticks: {
                color: '#64748b',
                font: { family: "'Outfit', sans-serif", size: 12, weight: 500 },
                padding: 10
            },
            border: { display: false }
        },
    },
    barThickness: 40, // Thinner bars
    borderRadius: 20, // Fully rounded bars
};

const StatCard = ({ title, value, change, icon: Icon, color }) => (
    <div
        className="stat-card-premium"
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '2rem 1.75rem',
            position: 'relative',
            overflow: 'hidden',
            background: 'transparent',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none',
            borderRadius: '20px',
            border: 'none',
            boxShadow: 'none',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'default'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = 'none';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
        }}

    >
        {/* Icon Container */}
        <div style={{
            position: 'relative',
            padding: '16px',
            borderRadius: '18px',
            background: 'transparent',
            color: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'none',
            transition: 'all 0.3s ease',
            zIndex: 1
        }}>
            <Icon size={28} strokeWidth={2.2} />
        </div>

        {/* Content Container */}
        <div style={{ flex: 1, zIndex: 1 }}>
            {/* Title with Premium Typography */}
            <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.875rem',
                marginBottom: '8px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                opacity: 0.85
            }}>
                {title}
            </p>

            {/* Value with Elegant Styling */}
            <h3 style={{
                fontSize: '2rem',
                margin: 0,
                fontWeight: 700,
                letterSpacing: '-0.03em',
                background: 'linear-gradient(135deg, var(--text-main) 0%, #334155 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.2
            }}>
                {value}
            </h3>

            {/* Monthly Delta with Refined Styling */}
            <span style={{
                fontSize: '0.8125rem',
                color: '#10b981',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                marginTop: '6px',
                letterSpacing: '0.01em'
            }}>
                <TrendingUp size={15} strokeWidth={2.5} />
                {change}
            </span>
        </div>
    </div>
);

const Dashboard = () => {
    // Light mode chart options
    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    padding: 20,
                    color: '#64748b',
                    font: {
                        family: "'Outfit', sans-serif",
                        size: 12,
                        weight: 500
                    }
                },
            },
            title: {
                display: true,
                text: 'Audience Growth',
                align: 'start',
                font: {
                    family: "'Outfit', sans-serif",
                    size: 18,
                    weight: '600',
                },
                padding: {
                    bottom: 30,
                },
                color: '#1e293b'
            },
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                titleColor: '#1e293b',
                bodyColor: '#64748b',
                borderColor: '#e2e8f0',
                borderWidth: 1,
                padding: 12,
                boxPadding: 6,
                usePointStyle: true,
                titleFont: { family: "'Outfit', sans-serif", size: 13, weight: 600 },
                bodyFont: { family: "'Outfit', sans-serif", size: 12 },
                displayColors: true,
            }
        },
        scales: {
            y: {
                grid: {
                    borderDash: [4, 4],
                    drawBorder: false,
                    color: '#f1f5f9',
                },
                ticks: {
                    padding: 10,
                    color: '#64748b',
                    font: { family: "'Outfit', sans-serif", size: 11 }
                },
                border: { display: false }
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    padding: 10,
                    color: '#64748b',
                    font: { family: "'Outfit', sans-serif", size: 11 }
                },
                border: { display: false }
            },
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
        elements: {
            line: {
                tension: 0.4,
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
            }
        }
    };

    return (
        <div className="dashboard">
            <header className="top-header">
                <div className="welcome-text">
                    <h1>Dashboard</h1>
                    <p>Welcome back to YSS Analytics</p>
                </div>
            </header>

            {/* Quick Stats Row */}
            <div className="stats-grid">
                <StatCard title="Total Views" value="124.5K" change="+12.5% from last month" icon={Eye} color="#7c3aed" />
                <StatCard title="Total Followers" value="45.2K" change="+8.2% from last month" icon={Users} color="#d62976" />
                <StatCard title="Engagement Rate" value="5.8%" change="+2.1% from last month" icon={TrendingUp} color="#10b981" />
                <StatCard title="Comments" value="2,845" change="+15.3% from last month" icon={MessageCircle} color="#f59e0b" />
            </div>

            {/* Main Chart Area - Audience Growth */}
            <div className="card" style={{ height: '400px', marginBottom: '1.5rem' }}>
                <Line options={lineChartOptions} data={socialGrowthData} />
            </div>

            <div className="dashboard-grid" style={{ marginTop: 0 }}>
                {/* Social Media Progress Chart - Custom Implementation */}
                <div className="card" style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600 }}>Social Media Progress</h3>
                    <div style={{ height: '300px', display: 'flex', alignItems: 'stretch' }}>
                        {/* Y-Axis Labels */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            paddingRight: '1rem',
                            paddingBottom: '60px', // Space for x-axis labels
                            color: '#64748b',
                            fontSize: '0.75rem',
                            fontWeight: 500
                        }}>
                            {[100, 80, 60, 40, 20, 0].map(val => (
                                <span key={val}>{val}</span>
                            ))}
                        </div>

                        {/* Chart Area */}
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            {/* Bars Container */}
                            <div style={{
                                flex: 1,
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'space-around',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                position: 'relative'
                            }}>
                                {/* Grid Lines */}
                                {[0, 20, 40, 60, 80, 100].map((val, i) => (
                                    <div key={val} style={{
                                        position: 'absolute',
                                        bottom: `${val}%`,
                                        left: 0,
                                        right: 0,
                                        borderTop: val === 0 ? 'none' : '1px dashed rgba(226, 232, 240, 0.4)',
                                        zIndex: 0
                                    }} />
                                ))}

                                {platformProgressData.datasets[0].data.map((value, index) => {
                                    const label = platformProgressData.labels[index];
                                    const logoMap = {
                                        'WhatsApp': 'https://img.freepik.com/premium-vector/whatsapp-vector-logo-icon-logotype-vector-social-media_901408-406.jpg?semt=ais_hybrid&w=740&q=80',
                                        'LinkedIn': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-0ggeQFzIc6YMAGOxNE6pn9QUpb4vW8HQA&s',
                                        'TikTok': 'https://icon2.cleanpng.com/20200922/xqh/transparent-social-media-1713858561643.webp'
                                    };
                                    return (
                                        <div key={index} style={{
                                            width: '40px',
                                            height: `${value}%`,
                                            backgroundColor: platformProgressData.datasets[0].backgroundColor[index],
                                            borderRadius: '8px 8px 0 0',
                                            zIndex: 1,
                                            transition: 'height 1s ease-out',
                                            position: 'relative',
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            paddingBottom: '8px'
                                        }}>
                                            <div style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                padding: '2px',
                                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                            }}>
                                                <img src={logoMap[label]} alt={label} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* X-Axis Labels (Names Only) */}
                            <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '0.75rem' }}>
                                {platformProgressData.labels.map((label, index) => (
                                    <div key={index} style={{ width: '40px', display: 'flex', justifyContent: 'center' }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)' }}>{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Engagement Overview List */}
                <div className="card" style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600 }}>Engagement Overview</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { name: 'WhatsApp', value: '2,345', icon: 'https://www.freeiconspng.com/uploads/whatsapp-logo-background-29.png', color: '#25D366' },
                            { name: 'LinkedIn', value: '1,876', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-0ggeQFzIc6YMAGOxNE6pn9QUpb4vW8HQA&s', color: '#0077B5' },
                            { name: 'TikTok', value: '3,421', icon: 'https://icon2.cleanpng.com/20200922/xqh/transparent-social-media-1713858561643.webp', color: '#000000' },
                            { name: 'Instagram', value: '4,567', icon: 'https://toppng.com/uploads/preview/logo-instagram-116587966427mvdfvahmo.png', color: '#E1306C' }
                        ].map((platform) => (
                            <div key={platform.name} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '1rem',
                                backgroundColor: 'transparent',
                                borderRadius: '12px',
                                border: 'none'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: 'transparent',
                                        boxShadow: 'none',
                                        padding: '4px'
                                    }}>
                                        <img src={platform.icon} alt={platform.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    </div>
                                    <span style={{ fontWeight: 500, color: '#334155' }}>{platform.name}</span>
                                </div>
                                <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0f172a' }}>{platform.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
