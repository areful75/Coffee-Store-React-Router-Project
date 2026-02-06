import React from 'react';
import bannerImg from '../assets/banner.jpg';
const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
       // backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',}} className=" rounded-2xl hero bg-base-200 h-[600px]">
 
</div>
    );
};

export default Banner;



