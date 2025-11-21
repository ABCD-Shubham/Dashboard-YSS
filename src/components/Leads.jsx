import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { leadsData } from '../data/mockData';
import LeadCard from './LeadCard';
import { Filter, Search } from 'lucide-react';

const Leads = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter leads by status first, then by search query
    const filteredLeads = leadsData
        .filter(lead => filter === 'All' || lead.status === filter)
        .filter(lead => {
            if (!searchQuery) return true;
            const query = searchQuery.toLowerCase();
            return (
                lead.name.toLowerCase().includes(query) ||
                lead.profession.toLowerCase().includes(query) ||
                lead.status.toLowerCase().includes(query)
            );
        });

    const handleLeadClick = (id) => {
        navigate(`/leads/${id}`);
    };

    return (
        <div className="leads-page">
            <header className="top-header" style={{ marginBottom: '2rem', alignItems: 'center' }}>
                {/* Left: Title */}
                <div className="welcome-text">
                    <h1>Leads Management</h1>
                    <p>Identify and engage your most loyal customers</p>
                </div>

                {/* Middle: Search Bar */}
                <div style={{
                    flex: 1,
                    maxWidth: '500px',
                    margin: '0 2rem',
                    position: 'relative'
                }}>
                    <Search
                        size={18}
                        style={{
                            position: 'absolute',
                            left: '1rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'var(--text-muted)',
                            pointerEvents: 'none',
                            zIndex: 1
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Search leads by name, profession, or status..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.75rem 2.75rem 0.75rem 2.75rem',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            color: 'var(--text-main)',
                            background: 'transparent',
                            backdropFilter: 'none',
                            WebkitBackdropFilter: 'none',
                            border: '1px solid rgba(255, 255, 255, 0.4)',
                            borderRadius: 'var(--radius-sm)',
                            outline: 'none',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: 'none'
                        }}
                        onFocus={(e) => {
                            e.target.style.boxShadow = `
                                0 4px 12px rgba(0, 0, 0, 0.06),
                                0 0 0 3px rgba(78, 168, 255, 0.1),
                                inset 0 1px 0 rgba(255, 255, 255, 0.9)
                            `;
                            e.target.style.borderColor = 'rgba(78, 168, 255, 0.3)';
                        }}
                        onBlur={(e) => {
                            e.target.style.boxShadow = `
                                0 2px 8px rgba(0, 0, 0, 0.04),
                                inset 0 1px 0 rgba(255, 255, 255, 0.8)
                            `;
                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                        }}
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            style={{
                                position: 'absolute',
                                right: '0.75rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'rgba(100, 116, 139, 0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '20px',
                                height: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: 'var(--text-muted)',
                                fontSize: '12px',
                                fontWeight: 600,
                                transition: 'all 0.2s ease',
                                zIndex: 1
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'rgba(100, 116, 139, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(100, 116, 139, 0.1)';
                            }}
                        >
                            ×
                        </button>
                    )}
                </div>

                {/* Right: Filter Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
                    {['All', 'Hot', 'Warm', 'Cold'].map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`btn ${filter === status ? 'btn-primary' : ''}`}
                            style={{
                                backgroundColor: filter === status ? '' : 'var(--bg-card)',
                                color: filter === status ? '' : 'var(--text-muted)',
                                border: filter === status ? '' : '1px solid var(--border-color)',
                                padding: '0.65rem 1.25rem',
                                fontSize: '0.875rem'
                            }}
                        >
                            {status === 'All' && <Filter size={14} style={{ marginRight: '6px' }} />}
                            {status}
                        </button>
                    ))}
                </div>
            </header>

            {/* Search Results Info */}
            {searchQuery && (
                <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        fontWeight: 500
                    }}>
                        Found {filteredLeads.length} lead{filteredLeads.length !== 1 ? 's' : ''} matching "{searchQuery}"
                    </p>
                </div>
            )}

            {/* Leads Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem'
            }}>
                {filteredLeads.length > 0 ? (
                    filteredLeads.map((lead) => (
                        <LeadCard
                            key={lead.id}
                            lead={lead}
                            onClick={() => handleLeadClick(lead.id)}
                        />
                    ))
                ) : (
                    <div style={{
                        gridColumn: '1 / -1',
                        textAlign: 'center',
                        padding: '4rem 2rem',
                        background: 'transparent',
                        backdropFilter: 'none',
                        borderRadius: 'var(--radius-lg)',
                        border: 'none',
                        boxShadow: 'none'
                    }}>
                        <Search size={48} style={{ color: 'var(--text-muted)', opacity: 0.3, marginBottom: '1rem' }} />
                        <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>No leads found</h3>
                        <p style={{ color: 'var(--text-muted)' }}>
                            Try adjusting your search or filter criteria
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Leads;
