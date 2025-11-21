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
    <div className="card" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.25rem',
        padding: '1.75rem',
        position: 'relative',
        overflow: 'hidden'
    }}>
        <div style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '100px',
            height: '100px',
            background: `radial-gradient(circle, ${color}15 0%, transparent 70%)`,
            borderRadius: '50%',
        }} />

        <div style={{
            padding: '14px',
            borderRadius: '16px',
            backgroundColor: `${color}15`,
            color: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 4px 12px ${color}20`
        }}>
            <Icon size={26} strokeWidth={2} />
        </div>
        <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '6px', fontWeight: 500 }}>{title}</p>
            <h3 style={{ fontSize: '1.75rem', margin: 0, fontWeight: 700, letterSpacing: '-0.02em' }}>{value}</h3>
            <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                <TrendingUp size={14} /> {change}
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <StatCard title="Total Views" value="124.5K" change="+12.5% from last month" icon={Eye} color="#7c3aed" />
                <StatCard title="Total Followers" value="45.2K" change="+8.2% from last month" icon={Users} color="#d62976" />
                <StatCard title="Engagement Rate" value="5.8%" change="+2.1% from last month" icon={TrendingUp} color="#10b981" />
                <StatCard title="Comments" value="2,845" change="+15.3% from last month" icon={MessageCircle} color="#f59e0b" />
            </div>

            {/* Main Chart Area - Audience Growth */}
            <div className="card" style={{ height: '400px', marginBottom: '1.5rem' }}>
                <Line options={lineChartOptions} data={socialGrowthData} />
            </div>

            <div className="dashboard-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: 0 }}>
                {/* Social Media Progress Chart */}
                <div className="card" style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600 }}>Social Media Progress</h3>
                    <div style={{ height: '300px' }}>
                        <Bar
                            data={platformProgressData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: { legend: { display: false } },
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        grid: { color: '#f1f5f9', borderDash: [4, 4] },
                                        ticks: { font: { family: "'Outfit', sans-serif", size: 10 }, color: '#64748b' },
                                        border: { display: false }
                                    },
                                    x: {
                                        grid: { display: false },
                                        ticks: { font: { family: "'Outfit', sans-serif", size: 11, weight: 600 }, color: '#1e293b' },
                                        border: { display: false }
                                    }
                                },
                                barThickness: 40,
                                borderRadius: 4
                            }}
                        />
                    </div>
                </div>

                {/* Engagement Overview List */}
                <div className="card" style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600 }}>Engagement Overview</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            { name: 'WhatsApp', value: '2,345', icon: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-whatsapp-icon-png-image_3584844.jpg', color: '#25D366' },
                            { name: 'LinkedIn', value: '1,876', icon: 'https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png', color: '#0077B5' },
                            { name: 'TikTok', value: '3,421', icon: 'https://t3.ftcdn.net/jpg/03/41/43/52/360_F_341435208_sdjw1aOLLRwTh5kZzjP1fKvZsi7OkcLT.jpg', color: '#000000' },
                            { name: 'Instagram', value: '4,567', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png', color: '#E1306C' }
                        ].map((platform) => (
                            <div key={platform.name} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '1rem',
                                backgroundColor: '#f8fafc',
                                borderRadius: '12px',
                                border: '1px solid #f1f5f9'
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
                                        backgroundColor: 'white',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
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
