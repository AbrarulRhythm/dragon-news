import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import LatestNews from '../../components/LatestNews/LatestNews';
import NavBar from '../../components/NavBar/NavBar';
import LeftAside from '../../components/HomeLayout/LeftAside';
import RightAside from '../../components/HomeLayout/RightAside';

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
            <div className='container'>
                <main className='flex flex-wrap -mx-3 mt-5'>
                    <aside className='w-full lg:w-3/12 px-3 mb-6'>
                        <LeftAside></LeftAside>
                    </aside>
                    <section className='w-full lg:w-6/12 px-3 mb-6'>
                        <Outlet></Outlet>
                    </section>
                    <aside className='w-full lg:w-3/12 px-3 mb-6'>
                        <RightAside></RightAside>
                    </aside>
                </main>
            </div>
        </>
    );
};

export default HomeLayout;