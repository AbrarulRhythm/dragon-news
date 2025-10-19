import React, { use, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { signInUser } = use(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Handle Sign In
    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch(error => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                setError(errorCode);
            })
    }

    return (
        <div className='container'>
            <div className='flex flex-wrap justify-center items-center -mx-3'>
                <div className='w-full md:w-8/12 lg:w-6/12 px-3'>
                    <div className='bg-white p-6 md:p-10 lg:p-16 rounded-md'>
                        <h1 className='text-center text-2xl md:text-4xl font-semibold text-dark-2'>Login your account</h1>
                        <hr className='border-0 border-t border-dark-6 my-6 md:my-12' />
                        <form onSubmit={handleSignIn}>
                            {/* Email */}
                            <div className='mb-4'>
                                <label className='block text-base text-dark-2 font-medium mb-2'>Email address</label>
                                <input type='email' name='email' className='w-full bg-dark-7 text-dark-4 py-4 px-5 rounded-md focus:outline-0 border-2 border-transparent focus:border-pink-theme/60' placeholder='Enter your email address' required />
                            </div>
                            {/* Password */}
                            <div className='mb-6'>
                                <label className='block text-base text-dark-2 font-medium mb-2'>Password</label>
                                <div className='relative'>
                                    <input type={showPassword ? 'text' : 'password'} name='password' className='w-full bg-dark-7 text-dark-4 py-4 px-5 rounded-md focus:outline-0 border-2 border-transparent focus:border-pink-theme/60' placeholder='Enter your Password' required />
                                    <span onClick={() => setShowPassword(!showPassword)} className='absolute right-5 top-[50%] -translate-y-[50%] text-xl cursor-pointer text-dark-4 hover:text-dark-3 duration-150'>
                                        {showPassword ? <FaEye /> : <IoEyeOff />}
                                    </span>
                                </div>
                            </div>

                            {/* Show Error Message */}
                            {
                                error && <span className='block text-sm text-red-500 font-medium text-center mb-6'>{error}</span>
                            }

                            {/* Submit Button */}
                            <div className='mb-6'>
                                <button type='submit' className='w-full bg-dark-2 text-white text-base font-medium py-4 rounded-md cursor-pointer'>Login</button>
                            </div>
                        </form>
                        <p className='mt-6 text-base font-semibold text-dark-3 text-center'>Dont’t Have An Account ? <Link className='text-pink-theme hover:text-pink-theme/60 duration-300' to='/auth/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;