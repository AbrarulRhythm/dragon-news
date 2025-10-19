import React from 'react';

import adImage from '../../assets/ad.png';

const AD = () => {
    return (
        <div className='ad-div'>
            <img className='w-full' src={adImage} alt='ad image' />
        </div>
    );
};

export default AD;