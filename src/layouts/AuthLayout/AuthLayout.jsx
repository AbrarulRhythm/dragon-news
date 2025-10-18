import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-dark-7 min-h-screen'>
            <header className='py-6'>
                <NavBar></NavBar>
            </header>
            <main className='py-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;