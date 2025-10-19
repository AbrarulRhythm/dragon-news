import React from 'react';
import loading from '../../assets/loading.gif';

const LoadingOne = ({ classes }) => {
    return (
        <div className={`flex justify-center items-center ${classes}`}>
            <img className='w-[72%] md:w-[40%] lg:w-[24%] 2xl:w-[16%]' src={loading} alt='loading' />
        </div>
    );
};

export default LoadingOne;