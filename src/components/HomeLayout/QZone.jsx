import React from 'react';

import swimming from '../../assets/swimming.png';
import classPic from '../../assets/class.png';
import playGround from '../../assets/playground.png';

const QZone = () => {
    return (
        <div className='q-zone bg-dark-7 py-4 px-1 mb-5'>
            <h2 className='text-dark-2 text-xl font-semibold mb-5 px-4'>Q-Zone</h2>
            <div className='space-y-5'>
                <img className='w-full' src={swimming} alt='swimming' />
                <img className='w-full' src={classPic} alt='classPic' />
                <img className='w-full' src={playGround} alt='playGround' />
            </div>
        </div>
    );
};

export default QZone;