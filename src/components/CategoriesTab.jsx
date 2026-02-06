import React from 'react';
import { Link, NavLink } from 'react-router';

const CategoriesTab = ({categories}) => {
    return (
        <div role="tablist" className="tabs tabs-lift w-full">
        {/* <a role="tab" className="tab flex-1 text-center">Tab 1</a>
        <a role="tab" className="tab tab-active flex-1 text-center">Tab 2</a>
        <a role="tab" className="tab flex-1 text-center">Tab 3</a> */}
        {
            categories.map(category => (
                <NavLink role="tab" className={({isActive})=> `tab flex-1 text-center ${isActive ? ' font-bold text-2xl tab-active':''}` } key={category.id} to={`category/${category.category}`}>{category.category}</NavLink>
            ))
        }
        </div>
    );
};

export default CategoriesTab;