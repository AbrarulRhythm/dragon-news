import React from 'react';
import logo from '../../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='flex justify-center flex-col items-center gap-2 md:gap-3 lg:gap-4 mt-6 md:mt-10 lg:mt-12'>
                    <img className='w-[290px] md:w-[350px] lg:w-[450px]' src={logo} alt='Header Logo' />
                    <p className='text-base md:text-lg'>Journalism Without Fear or Favour</p>
                </div>
                <p className='text-center text-dark-3 text-base md:text-lg font-medium mt-1 lg:mt-2'><span className='text-dark-2'>{format(new Date(), 'EEEE,')}</span> {format(new Date(), 'MMMM MM, yyyy')}</p>
            </div>
        </header>
    );
};

export default Header;