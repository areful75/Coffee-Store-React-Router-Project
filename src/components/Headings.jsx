import React from 'react';

const Headings = ({title,subtitle}) => {
    return (
        <div className='flex flex-col justify-center items-center my-12 w-full'>
            <h1 className='text-xl md:text-2xl lg:text-4xl font-thin mb-4'>{title}</h1>
            <p className='text-xs md:text-base text-gray-600 font-thin text-center'>{subtitle}</p>
        </div>
    );
};

export default Headings;