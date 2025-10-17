import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (parseInt(id) === 0) {
            setCategoryNews(data);
            return;
        }
        else if (parseInt(id) === 1) {
            const filteredNews = data.filter(news => news.others.is_today_pick === true);
            setCategoryNews(filteredNews);
        }
        else {
            const filteredNews = data.filter(news => news.category_id === parseInt(id));
            setCategoryNews(filteredNews);
        }
    }, [data, id]);

    return (
        <div>
            <h2 className='text-dark-2 text-xl font-semibold mb-5'>Dragon News Home - {categoryNews.length}</h2>
        </div>
    );
};

export default CategoryNews;