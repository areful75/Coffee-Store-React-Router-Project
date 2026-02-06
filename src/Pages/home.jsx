import React from 'react';
import Banner from '../components/Banner';
import Headings from '../components/Headings';
import CategoriesTab from '../components/CategoriesTab';
import { Outlet, useLoaderData } from 'react-router';

const home = () => {

    const categories=useLoaderData();
    //console.log(categories);
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            {/* heading */}
            <Headings title={'Browse Coffees by Category'}
             subtitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}>

             </Headings>

             {/* Categoris tab section */}

             <CategoriesTab categories={categories}></CategoriesTab>

             {/* Dynamic nasted component */}

             <Outlet></Outlet>

            

               
        </div>
    );
};

export default home;