import React from 'react';
import { Link } from 'react-router';

const VerifySuccess = () => {
    return (
        <div className='h-screen bg-green-100 flex justify-center items-center flex-col gap-4'>
            <div className='text-center'>
                <h1 className='text-2xl text-center font-semibold text-green-600 mb-3'>Email Verified Successfully!</h1>
                <p className='text-green-500 mb-8'>Now you can login to your account.</p>
                <Link className='bg-green-600 text-white font-medium py-3 px-10 rounded-md' to='/auth/login'>Go to Login</Link>
            </div>
        </div>
    );
};

export default VerifySuccess;