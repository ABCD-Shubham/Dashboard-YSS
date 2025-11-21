import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { leadsData } from '../data/mockData';
import LeadCard from './LeadCard';
import { Filter } from 'lucide-react';

const Leads = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');

    const filteredLeads = filter === 'All'
        ? leadsData
        : leadsData.filter(lead => lead.status === filter);

    const handleLeadClick = (id) => {
        navigate(`/leads/${id}`);
    };

    return (
        <div className="leads-page">
            <header className="top-header" style={{ marginBottom: '2rem' }}>
                <div className="welcome-text">
                    <h1>Leads Management</h1>
                    <p>Identify and engage your most loyal customers</p>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    {['All', 'Hot', 'Warm', 'Cold'].map((status) => (
                        <button
                            key={status}
                            onClick={() => setFilter(status)}
                            className={`btn ${filter === status ? 'btn-primary' : ''}`}
                            style={{
                                backgroundColor: filter === status ? '' : 'var(--bg-card)',
                                color: filter === status ? '' : 'var(--text-muted)',
                                border: filter === status ? '' : '1px solid var(--border-color)'
                            }}
                        >
                            {status === 'All' && <Filter size={16} style={{ marginRight: '8px' }} />}
                            {status}
                        </button>
                    ))}
                </div>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem'
            }}>
                {filteredLeads.map((lead) => (
                    <LeadCard
                        key={lead.id}
                        lead={lead}
                        onClick={() => handleLeadClick(lead.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Leads;
