import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThumbsUp, MessageCircle, Eye } from 'lucide-react';

const LeadCard = ({ lead }) => {
    const navigate = useNavigate();

    return (
        <div className="lead-card-new">
            {/* Profile Photo */}
            <div className="lead-card-photo">
                <img
                    src={lead.photoUrl}
                    alt={lead.name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            {/* Name */}
            <h3 className="lead-card-name">{lead.name}</h3>

            {/* Profession */}
            <p className="lead-card-profession">{lead.profession}</p>

            {/* Engagement Metrics */}
            <div className="lead-card-metrics">
                <div className="metric-item">
                    <ThumbsUp size={16} />
                    <span>{lead.likes}</span>
                </div>
                <div className="metric-item">
                    <MessageCircle size={16} />
                    <span>{lead.comments}</span>
                </div>
                <div className="metric-item">
                    <Eye size={16} />
                    <span>{lead.revisits}</span>
                </div>
            </div>

            {/* Analytics Button */}
            <button
                className="lead-card-btn"
                onClick={() => navigate(`/leads/${lead.id}`)}
            >
                Analytics
            </button>
        </div>
    );
};

export default LeadCard;
