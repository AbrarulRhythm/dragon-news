import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import LatestNews from '../../components/LatestNews/LatestNews';
import NavBar from '../../components/NavBar/NavBar';

const HomeLayout = () => {
    return (
        <>
            <header>
                <Header></Header>
                <section className='mt-7'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='mt-5'>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main>
                <section className='left_nav'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right_nav'></section>
            </main>
        </>
    );
};

export default HomeLayout;