import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import RightAside from '../../components/HomeLayout/RightAside';
import NewsDetailsCard from '../../components/NewsDetailsCard/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams(); // String Value
    const [news, setNews] = useState({});

    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id === id);
        setNews(newsDetails);
    }, [data, id]);

    return (
        <>
            <header>
                <Header></Header>
            </header>
            <main className='mt-7'>
                <section className='news-details'>
                    <div className='container'>
                        <div className='flex flex-wrap -mx-3'>
                            <div className='w-full md:w-9/12 px-3 mb-6'>
                                <h2 className='text-xl font-semibold mb-5 text-dark-2'>Dragon News</h2>
                                <NewsDetailsCard news={news}></NewsDetailsCard>
                            </div>
                            <div className='w-full md:w-3/12 px-3 mb-6'>
                                <RightAside></RightAside>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default NewsDetails;