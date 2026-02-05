import React from 'react';
import Banner from '../components/Banner';
import Headings from '../components/Headings';

const home = () => {
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            {/* heading */}
            <Headings title={'Browse Coffees by Category'} subtitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}></Headings>
        </div>
    );
};

export default home;