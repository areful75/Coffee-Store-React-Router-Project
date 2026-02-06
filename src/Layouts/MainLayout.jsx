import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            
          <div className='h-16'>
          <Navbar></Navbar>
          </div>
        
            <div className='min-h-[calc(100vh-289px)] py-12 container mx-auto px-12'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;