import React, { Suspense } from 'react';
import Categories from '../Categories/Categories';

const LeftAside = () => {
    return (
        <>
            <Suspense fallback={<span>Loading...</span>}>
                <Categories></Categories>
            </Suspense>
        </>
    );
};

export default LeftAside;