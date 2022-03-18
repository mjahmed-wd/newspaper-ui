import React, { useEffect, useState } from 'react';
import LeadingNews from '../../components/LeadingNews';
import NewsWithImage from '../../components/NewsWithImage';
import NewsWithNoImage from '../../components/NewsWithNoImage';
import { getNewsData } from '../../utils/helper';

const LandingPage = () => {
    const [allNews, setAllNews] = useState({});

    useEffect(() => {
        getNewsData(setAllNews)
    }, [])

    return (
        <div className="container grid-container">
            {allNews?.leadNews && <LeadingNews news={allNews?.leadNews} />}
            <>
                {allNews?.newsWithNoImages?.map(news =>
                    <NewsWithNoImage key={news?.id} news={news} />
                )}
            </>
            <>
                {allNews?.newsWithImages?.map(news =>
                    <NewsWithImage key={news?.id} news={news} />
                )}
            </>
            <span className="ad">Ad</span>
            <span className="feature">feature</span>
        </div>
    )
}

export default LandingPage