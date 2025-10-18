import React from 'react';
import { BsBookmark, BsShare } from 'react-icons/bs';
import { FaEye, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view
    } = news;

    const formatedDate = new Date(author.published_date).toDateString();

    return (
        <div className='overflow-hidden'>
            <div className='flex justify-between items-center bg-dark-7 py-4 px-5 rounded-t-md'>
                <div className='flex items-center gap-4'>
                    <img className='w-[40px] rounded-full' src={author.img} alt='Author Image' />
                    <div>
                        <h4 className='text-base font-semibold text-dark-2 mb-0.5'>{author.name}</h4>
                        <p className='text-sm'>{formatedDate}</p>
                    </div>
                </div>
                <div className='text-xl flex items-center gap-3'>
                    <BsBookmark />
                    <BsShare />
                </div>
            </div>
            <div className='pt-3.5 px-5 pb-5 rounded-b-md border border-dark-6 border-t-0'>
                <h1 className='text-xl font-bold text-dark-2 mb-5'>{title}</h1>
                <img className='max-h-[300px] w-full rounded-md object-cover mb-6' src={thumbnail_url} alt='thumbnail image' />
                <p>
                    {
                        details.length > 200 ? (
                            <>
                                {details.slice(0, 200)}...
                                <span className='block text-yellow-theme font-semibold cursor-pointer hover:opacity-60 duration-200'>Read More</span>
                            </>
                        ) : (
                            details
                        )
                    }
                </p>
                <hr className='border-0 border-t border-dark-6 my-5' />
                <div className='flex justify-between items-center'>
                    <div className='flex gap-1 text-yellow-theme items-center'>
                        {
                            Array.from({ length: rating.number }).map((_, i) => (
                                <FaStar key={i} />
                            ))
                        }
                        <span className='text-dark-3 font-medium ml-2'>{rating.number}</span>
                    </div>
                    <div className='flex items-center gap-2.5 font-medium'>
                        <FaEye className='text-xl' /> <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;