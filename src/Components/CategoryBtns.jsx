import React from 'react';

const CategoryBtn = ({ label, color, icon }) => {
    return (
        <button className={`flex items-center px-1.5 py-1 sm:px-4 sm:py-2 rounded-lg text-white ${color} transition hover:brightness-110 cursor-default`}>
            {icon && <span className="mr-2">{icon}</span>}
            {label}
        </button>
    );
};

export default CategoryBtn;
