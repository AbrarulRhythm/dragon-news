import React, { use } from 'react';
import { NavLink } from 'react-router';

const fetchCategory = async () => {
    const res = await fetch('/categories.json');
    return res.json();
}
const categoryPromise = fetchCategory();

const Categories = () => {
    const categories = use(categoryPromise);

    return (
        <div className='sticky top-5'>
            <h2 className='text-dark-2 text-xl font-semibold mb-5'>All Caterogy</h2>
            <div className='category-link grid grid-cols-1'>
                {
                    categories.map((category) => {
                        return (
                            <NavLink
                                to={`/category/${category.id}`}
                                key={category.id}
                                className='text-lg py-4 pl-6 pr-4 rounded-md font-medium'
                            >
                                {category.name}
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Categories;