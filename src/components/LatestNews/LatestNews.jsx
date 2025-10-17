import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='container'>
            <div className='flex items-center gap-5 bg-dark-7 p-4'>
                <p className='bg-pink-theme font-medium text-white py-2 px-6'>Latest</p>
                <Marquee className='flex gap-6' pauseOnHover={true} speed={60}>
                    <p className='text-dark-2 font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                    <p className='text-dark-2 font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                    <p className='text-dark-2 font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestNews;