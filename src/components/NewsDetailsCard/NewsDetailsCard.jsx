import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    const { category_id, title, thumbnail_url, details } = news

    return (
        <div className='bg-white p-6 md:p-7 border border-dark-6 rounded-md'>
            <img className='w-full rounded-md mb-5' src={thumbnail_url} alt='News Image' />
            <h2 className='text-2xl font-bold text-dark-2 mb-2'>{title}</h2>
            <p className='mb-7'>{details}</p>
            <Link to={`/category/${category_id}`} className='flex items-center gap-3 w-fit text-white bg-pink-theme/80 py-3 px-6 cursor-pointer hover:bg-pink-theme duration-300'><FaArrowLeftLong /> All news in this category</Link>
        </div >
    );
};

export default NewsDetailsCard;