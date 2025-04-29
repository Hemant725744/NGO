import React from 'react';

const TeamMemberModal = ({ member, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    &times;
                </button>
                <img
                    src={member.photo}
                    alt={member.name}
                    className="rounded-lg shadow-md mb-4"
                />
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="mt-4">{member.bio}</p>
            </div>
        </div>
    );
};

export default TeamMemberModal;