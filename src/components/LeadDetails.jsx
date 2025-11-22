import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { leadsData } from '../data/mockData';
import {
    ArrowLeft, Phone, Mail, MapPin, Calendar, Award,
    MoreHorizontal, Settings, Printer, Edit2, User, Globe, Home,
    TrendingUp, MessageCircle, Eye, ThumbsUp, Sparkles, Check
} from 'lucide-react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,
} from 'chart.js';
import { Bar, Line, Radar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend
);

const LeadDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const lead = leadsData.find(l => l.id === parseInt(id));
    const printRef = useRef();
    const [showNotification, setShowNotification] = useState(false);

    if (!lead) return <div>Lead not found</div>;

    // Default stats if not present in mock data
    const stats = lead.stats || {
        likes: [12, 19, 3, 5, 2, 3, 9],
        comments: [2, 3, 20, 5, 1, 4, 2],
        views: [35, 40, 55, 60, 45, 50, 65]
    };

    // Main Vertical Bar Chart (Sales Efficiency Style)
    const mainChartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Views',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: '#3b82f6', // Blue
                borderRadius: 4,
                barPercentage: 0.5,
            },
            {
                label: 'Engagements',
                data: [28, 48, 40, 19, 86, 27, 90],
                backgroundColor: '#facc15', // Yellow
                borderRadius: 4,
                barPercentage: 0.5,
            },
            {
                label: 'Points',
                data: [45, 25, 60, 45, 30, 70, 55],
                backgroundColor: '#ec4899', // Pink
                borderRadius: 4,
                barPercentage: 0.5,
            },
        ],
    };

    const mainChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }, // Hide legend to match design
            tooltip: {
                backgroundColor: '#1e293b',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 12,
                cornerRadius: 8,
                displayColors: false,
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#f1f5f9',
                    drawBorder: false,
                },
                ticks: {
                    color: '#94a3b8',
                    font: { family: "'Outfit', sans-serif", size: 11 }
                },
                border: { display: false }
            },
            x: {
                grid: { display: false },
                ticks: {
                    color: '#64748b',
                    font: { family: "'Outfit', sans-serif", size: 11 }
                },
                border: { display: false }
            },
        },
    };

    // Mini Line Charts Configuration
    const createMiniChartData = (data, color) => ({
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            data: data,
            borderColor: color,
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 4,
        }]
    });

    const miniChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: {
            x: { display: false },
            y: { display: false, min: 0 }
        },
        layout: { padding: 5 }
    };

    const handleDownloadPDF = async () => {
        const element = printRef.current;
        if (!element) return;

        try {
            const canvas = await html2canvas(element, {
                scale: 2, // Higher quality
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff'
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = pdfWidth;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pdfHeight;
            }

            pdf.save(`${lead.name.replace(/\s+/g, '_')}_Audit_Report.pdf`);

            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    // ... (rest of the component)

    return (
        <div className="lead-details-page" style={{ background: 'var(--bg-body)', height: 'calc(100vh - 4rem)', width: '100%', overflow: 'hidden' }}>

            {/* Hidden Audit Template for PDF Generation */}
            <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
                <div ref={printRef} style={{
                    width: '210mm',
                    minHeight: '297mm',
                    padding: '20mm',
                    background: '#ffffff',
                    fontFamily: "'Outfit', sans-serif",
                    color: '#0f172a'
                }}>
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #e2e8f0', paddingBottom: '20px', marginBottom: '30px' }}>
                        <div>
                            <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#7c3aed', margin: 0 }}>YSS Audit Report</h1>
                            <p style={{ fontSize: '12px', color: '#64748b', marginTop: '5px' }}>Generated on {new Date().toLocaleDateString()}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <h2 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>{lead.name}</h2>
                            <p style={{ fontSize: '12px', color: '#64748b' }}>{lead.platform} Influencer</p>
                        </div>
                    </div>

                    {/* Executive Summary */}
                    <div style={{ marginBottom: '30px', background: '#f8fafc', padding: '20px', borderRadius: '12px' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '15px', color: '#0f172a' }}>Executive Summary</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                            <div>
                                <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Total Points</p>
                                <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#7c3aed' }}>{lead.points}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Total Views</p>
                                <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#10b981' }}>{stats.views.reduce((a, b) => a + b, 0)}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Current Rank</p>
                                <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#f59e0b' }}>1st</p>
                            </div>
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '15px', borderLeft: '4px solid #7c3aed', paddingLeft: '10px' }}>Engagement Efficiency</h3>
                        <div style={{ height: '300px', width: '100%', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '15px' }}>
                            <Bar data={mainChartData} options={{ ...mainChartOptions, animation: false }} />
                        </div>
                    </div>

                    {/* Contact & Details */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
                        <div>
                            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '15px', borderLeft: '4px solid #ec4899', paddingLeft: '10px' }}>Contact Information</h3>
                            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
                                <p><strong style={{ color: '#64748b' }}>Email:</strong> {lead.email}</p>
                                <p><strong style={{ color: '#64748b' }}>Phone:</strong> {lead.phone}</p>
                                <p><strong style={{ color: '#64748b' }}>Address:</strong> {lead.address}</p>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '15px', borderLeft: '4px solid #3b82f6', paddingLeft: '10px' }}>Profile Details</h3>
                            <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
                                <p><strong style={{ color: '#64748b' }}>User ID:</strong> {lead.userId}</p>
                                <p><strong style={{ color: '#64748b' }}>Status:</strong> {lead.status}</p>
                                <p><strong style={{ color: '#64748b' }}>Country:</strong> {lead.country}</p>
                            </div>
                        </div>
                    </div>

                    {/* AI Recommendations */}
                    <div style={{ marginTop: 'auto', borderTop: '2px solid #e2e8f0', paddingTop: '20px' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px', color: '#7c3aed' }}>AI Recommendations</h3>
                        <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                            Based on the engagement analysis, {lead.name} shows strong performance in video content.
                            It is recommended to increase posting frequency on weekends to maximize reach.
                            Collaborative content with other {lead.platform} influencers could further boost the engagement rate by estimated 15%.
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '1.5rem', height: '100%' }}>
                {/* ... (Left Sidebar) */}
                <div className="card" style={{
                    padding: '0',
                    height: '100%',
                    overflowY: 'auto',
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: 'none',
                    scrollbarWidth: 'none'
                }}>
                    <div style={{ padding: '2rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
                        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1rem' }}>
                            <div style={{
                                width: '96px',
                                height: '96px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, var(--primary-light), var(--primary))',
                                color: '#e2e8f0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                fontWeight: 600,
                                margin: '0 auto',
                                border: '4px solid var(--bg-body)',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',

                            }}>
                                {lead.avatar}
                            </div>
                            <button style={{
                                position: 'absolute',
                                bottom: '0',
                                right: '0',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '50%',
                                width: '32px',
                                height: '32px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}>
                                <Edit2 size={14} color="var(--text-muted)" />
                            </button>
                        </div>

                        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{lead.name}</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{lead.platform} Influencer</p>
                    </div>

                    {/* Stats Row */}
                    <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)' }}>
                        <div style={{ flex: 1, padding: '1.5rem 1rem', textAlign: 'center', borderRight: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)' }}>{lead.points}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Points</div>
                        </div>
                        <div style={{ flex: 1, padding: '1.5rem 1rem', textAlign: 'center', borderRight: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#10b981' }}>{stats.views.reduce((a, b) => a + b, 0)}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Views</div>
                        </div>
                        <div style={{ flex: 1, padding: '1.5rem 1rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f59e0b' }}>1st</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Rank</div>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div style={{ padding: '2rem' }}>
                        <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 700 }}>Details</h4>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Email address</label>
                                <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>{lead.email}</div>
                            </div>

                            <div>
                                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Phone number</label>
                                <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>{lead.phone}</div>
                            </div>

                            <div>
                                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>User ID</label>
                                <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>{lead.userId || 'YSS-8842'}</div>
                            </div>

                            <div>
                                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Address</label>
                                <div style={{ fontSize: '0.9rem', fontWeight: 500, lineHeight: '1.4' }}>
                                    {lead.address || '42 Sunset Blvd, Los Angeles, CA 90028'}
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }}>
                            Edit Permissions
                        </button>

                        <button
                            className="btn"
                            style={{
                                width: '100%',
                                marginTop: '1rem',
                                background: 'transparent',
                                border: '2px solid var(--primary)',
                                color: 'var(--primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                fontWeight: 600
                            }}
                        >
                            <Sparkles size={18} />
                            Generate Suggestion
                        </button>
                    </div>
                </div>

                {/* Right Content Area */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%', overflowY: 'auto', paddingRight: '0.5rem' }}>
                    {/* Header moved here */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <button
                                onClick={() => navigate('/leads')}
                                className="btn"
                                style={{ padding: 0, color: 'var(--text-muted)', background: 'transparent' }}
                            >
                                <ArrowLeft size={20} />
                            </button>
                            <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Lead Profile</h2>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button onClick={handleDownloadPDF} className="btn" style={{ background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '8px' }}><Printer size={18} color="var(--text-muted)" /></button>
                            <button className="btn" style={{ background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '8px' }}><Settings size={18} color="var(--text-muted)" /></button>
                        </div>
                    </div>

                    {/* Top Chart Section */}
                    <div className="card" style={{ height: '400px', display: 'flex', flexDirection: 'column', background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: 'none' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem' }}>Engagement Efficiency</h3>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button onClick={handleDownloadPDF} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}><Printer size={18} color="var(--text-muted)" /></button>
                                <button style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}><MoreHorizontal size={18} color="var(--text-muted)" /></button>
                            </div>
                        </div>
                        <div style={{ flex: 1, position: 'relative' }}>
                            <Bar data={mainChartData} options={mainChartOptions} />
                        </div>
                    </div>

                    {/* Bottom Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>

                        {/* Engagement Trends (Mini Charts) */}
                        <div className="card" style={{ background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: 'none' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.1rem' }}>Engagement Trends</h3>
                                <MoreHorizontal size={18} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {/* Likes Trend */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '2px' }}>Likes Given</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Last month: <span style={{ color: '#10b981' }}>94+</span></div>
                                    </div>
                                    <div style={{ width: '100px', height: '40px' }}>
                                        <Line data={createMiniChartData(stats.likes, '#3b82f6')} options={miniChartOptions} />
                                    </div>
                                </div>

                                {/* Comments Trend */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '2px' }}>Comments</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Last month: <span style={{ color: '#ef4444' }}>31-</span></div>
                                    </div>
                                    <div style={{ width: '100px', height: '40px' }}>
                                        <Line data={createMiniChartData(stats.comments, '#06b6d4')} options={miniChartOptions} />
                                    </div>
                                </div>

                                {/* Views Trend */}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '2px' }}>Re-visits</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Last month: <span style={{ color: '#f59e0b' }}>58%</span></div>
                                    </div>
                                    <div style={{ width: '100px', height: '40px' }}>
                                        <Line data={createMiniChartData(stats.views, '#f59e0b')} options={miniChartOptions} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* NEW BOX 1: Content Affinity (Radar Chart) */}
                        <div className="card" style={{ display: 'flex', flexDirection: 'column', background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: 'none' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.1rem' }}>Content Affinity</h3>
                                <div style={{ background: 'var(--bg-body)', padding: '4px', borderRadius: '6px' }}>
                                    <TrendingUp size={16} color="var(--text-muted)" />
                                </div>
                            </div>
                            <div style={{ flex: 1, position: 'relative', minHeight: '200px' }}>
                                <Radar
                                    data={{
                                        labels: ['Hair', 'Makeup', 'Skincare', 'Vlogs', 'Tutorials', 'Reviews'],
                                        datasets: [{
                                            label: 'Interest Level',
                                            data: [90, 75, 60, 85, 95, 70],
                                            backgroundColor: 'rgba(139, 92, 246, 0.2)',
                                            borderColor: '#8b5cf6',
                                            borderWidth: 2,
                                            pointBackgroundColor: '#8b5cf6',
                                            pointBorderColor: '#fff',
                                        }]
                                    }}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        scales: {
                                            r: {
                                                angleLines: { color: '#f1f5f9' },
                                                grid: { color: '#f1f5f9' },
                                                pointLabels: { font: { family: "'Outfit', sans-serif", size: 11 }, color: '#64748b' },
                                                ticks: { display: false }
                                            }
                                        },
                                        plugins: { legend: { display: false } }
                                    }}
                                />
                            </div>
                        </div>

                        {/* Detailed Engagement History & AI Recommendations */}
                        <div className="card" style={{ gridColumn: '1 / -1', background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: 'none' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '2rem' }}>

                                {/* Left Column: History */}
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600 }}>Detailed Engagement History</h3>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {(lead.activityLog || []).map((activity) => (
                                            <div key={activity.id} style={{
                                                display: 'flex',
                                                gap: '1rem',
                                                padding: '1rem',
                                                borderRadius: '12px',
                                                backgroundColor: 'transparent',
                                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                                alignItems: 'center'
                                            }}>
                                                {/* Post Thumbnail */}
                                                <div style={{
                                                    width: '60px',
                                                    height: '60px',
                                                    borderRadius: '8px',
                                                    overflow: 'hidden',
                                                    flexShrink: 0,
                                                    position: 'relative'
                                                }}>
                                                    <img src={activity.postImage} alt="Post" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    <div style={{
                                                        position: 'absolute',
                                                        bottom: '2px',
                                                        right: '2px',
                                                        backgroundColor: 'rgba(0,0,0,0.6)',
                                                        borderRadius: '50%',
                                                        padding: '2px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>
                                                        {activity.type === 'like' && <ThumbsUp size={8} color="#e2e8f0" />}
                                                        {activity.type === 'comment' && <MessageCircle size={8} color="#e2e8f0" />}
                                                        {activity.type === 'view' && <Eye size={8} color="#e2e8f0" />}
                                                        {activity.type === 'reaction' && <Award size={8} color="#e2e8f0" />}
                                                    </div>
                                                </div>

                                                {/* Activity Details */}
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.15rem' }}>
                                                        <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase' }}>
                                                            {activity.platform} • {activity.type}
                                                        </span>
                                                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{activity.timestamp}</span>
                                                    </div>
                                                    <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.15rem', color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '180px' }}>
                                                        {activity.postTitle}
                                                    </h4>
                                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                        {activity.details}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}

                                        {(!lead.activityLog || lead.activityLog.length === 0) && (
                                            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                                                No detailed activity logged yet.
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Right Column: AI Recommendations */}
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>AI Recommendations</h3>
                                        <div style={{ background: 'linear-gradient(135deg, #8b5cf6, #d946ef)', padding: '4px 8px', borderRadius: '6px', color: '#e2e8f0', fontSize: '0.7rem', fontWeight: 600 }}>
                                            BETA
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {[
                                            { title: 'Send Exclusive Offer', desc: 'User has high interest in "Hair" products.', action: 'Send 20% Off', color: '#10b981' },
                                            { title: 'Engage with Comment', desc: 'Reply to recent comment on "Summer Look".', action: 'Reply Now', color: '#3b82f6' },
                                            { title: 'Invite to VIP Event', desc: 'User qualifies for Gold Tier status.', action: 'Send Invite', color: '#f59e0b' }
                                        ].map((rec, i) => (
                                            <div key={i} style={{
                                                padding: '1rem',
                                                borderRadius: '12px',
                                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                                background: 'transparent',
                                                boxShadow: 'none'
                                            }}>
                                                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                                    <div style={{
                                                        width: '32px', height: '32px',
                                                        borderRadius: '8px',
                                                        background: `${rec.color}20`,
                                                        color: rec.color,
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                    }}>
                                                        <Award size={16} />
                                                    </div>
                                                    <div>
                                                        <h4 style={{ fontSize: '0.9rem', fontWeight: 600 }}>{rec.title}</h4>
                                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{rec.desc}</p>
                                                    </div>
                                                </div>
                                                <button style={{
                                                    width: '100%',
                                                    padding: '8px',
                                                    borderRadius: '8px',
                                                    border: 'none',
                                                    background: rec.color,
                                                    color: '#e2e8f0',
                                                    fontSize: '0.8rem',
                                                    fontWeight: 600,
                                                    cursor: 'pointer',
                                                    transition: 'opacity 0.2s'
                                                }}>
                                                    {rec.action}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* Success Notification Popup */}
            {showNotification && (
                <div style={{
                    position: 'fixed',
                    bottom: '2.5rem',
                    right: '2.5rem',
                    background: '#000000',
                    color: '#ffffff',
                    padding: '14px 28px',
                    borderRadius: '100px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '14px',
                    animation: 'fadeIn 0.4s ease-out',
                    border: '1px solid rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(10px)'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(74, 222, 128, 0.2)',
                        borderRadius: '50%',
                        padding: '4px',
                        border: '1px solid rgba(74, 222, 128, 0.3)'
                    }}>
                        <Check size={16} color="#4ade80" strokeWidth={3} />
                    </div>
                    <span style={{
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        letterSpacing: '0.02em',
                        lineHeight: 1,
                        paddingTop: '2px' // Optical centering adjustment
                    }}>
                        Downloaded {lead.name}'s Profile
                    </span>
                </div>
            )}
        </div >
    );
};

export default LeadDetails;
