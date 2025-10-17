import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import LatestNews from '../../components/LatestNews/LatestNews';

const HomeLayout = () => {
    return (
        <>
            <header>
                <Header></Header>
                <section className='mt-7'>
                    <LatestNews></LatestNews>
                </section>
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