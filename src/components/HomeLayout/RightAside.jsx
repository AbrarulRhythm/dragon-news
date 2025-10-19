import React from 'react';
import SocialLogin from './SocialLogin';
import FindUsOn from './FindUsOn';
import QZone from './QZone';
import AD from './AD';

const RightAside = () => {
    return (
        <div className='sticky top-5'>
            <SocialLogin></SocialLogin>
            <FindUsOn></FindUsOn>
            <QZone></QZone>
            <AD></AD>
        </div>
    );
};

export default RightAside;