import React from 'react';
import SocialLogin from './SocialLogin';
import FindUsOn from './FindUsOn';

const RightAside = () => {
    return (
        <div className='sticky top-5'>
            <SocialLogin></SocialLogin>
            <FindUsOn></FindUsOn>
        </div>
    );
};

export default RightAside;