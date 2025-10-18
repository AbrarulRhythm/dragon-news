import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userProfile from '../../assets/user.png';
import { AuthContext } from '../../provider/AuthProvider';

const NavBar = () => {
    const { user, userSignOut } = use(AuthContext);

    const handleLogOut = () => {
        userSignOut()
            .then(() => {
                alert('You Logged Out Successfully');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='container'>
            <div className='flex justify-between items-center'>
                <div>
                    {
                        user && user.email
                    }
                </div>
                <div className='nav'>
                    <ul className='text-dark-3 font-medium flex items-center space-x-6'>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/career'>Career</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center space-x-2'>
                    <img className='w-[40px] rounded-full' src={userProfile} alt='User Image' />
                    {
                        user ? (
                            <button onClick={handleLogOut} className='bg-dark-2 text-white font-medium py-3 px-10 cursor-pointer'>Logout</button>
                        ) : (
                            <Link to='/auth/login' className='bg-dark-2 text-white font-medium py-3 px-10 cursor-pointer'>Login</Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;