import React from 'react';

import fb from '../../assets/fb.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';

const FindUsOn = () => {
    return (
        <div className='find-us-on'>
            <h2 className='text-dark-2 text-xl font-semibold mb-5'>Find Us On</h2>
            <div className='border border-dark-6 rounded-md'>
                <a className='p-6 flex items-center gap-2.5'>
                    <div className='w-[30px] h-[30px] flex justify-center items-center rounded-full bg-dark-7'>
                        <img src={fb} alt="facebook" />
                    </div>
                    <p className='text-base font-medium'>Facebook</p>
                </a>
                <hr className='border-0 border-t border-dark-6' />
                <a className='p-6 flex items-center gap-2.5'>
                    <div className='w-[30px] h-[30px] flex justify-center items-center rounded-full bg-dark-7'>
                        <img src={twitter} alt="Twitter" />
                    </div>
                    <p className='text-base font-medium'>Twitter</p>
                </a>
                <hr className='border-0 border-t border-dark-6' />
                <a className='p-6 flex items-center gap-2.5'>
                    <div className='w-[30px] h-[30px] flex justify-center items-center rounded-full bg-dark-7'>
                        <img src={instagram} alt="Instagram" />
                    </div>
                    <p className='text-base font-medium'>Instagram</p>
                </a>
            </div>
        </div>
    );
};

export default FindUsOn;