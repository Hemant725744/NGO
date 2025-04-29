import React from 'react';

const TeamMemberGrid = ({ members, onMemberClick }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
                <div
                    key={member.id}
                    className="team-member-card cursor-pointer text-center"
                    onClick={() => onMemberClick(member)}
                >
                    <img
                        src={member.photo}
                        alt={member.name}
                        className="team-member-photo rounded-lg shadow-md mb-4"
                    />
                    <h3 className="team-member-name">{member.name}</h3>
                    <p className="team-member-role">{member.role}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamMemberGrid;