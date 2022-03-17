import React, { useEffect, useState } from 'react';
import { getNewsData } from '../../utils/helper';
import { timeAgo } from "./../../assets/functions/timeAgo";

const LandingPage = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsData(setNews)
    }, [])

    return (
        <div className="container">
            {news.map(news =>
                <div key={news?.id}>
                    <h2>{news?.title}</h2>
                    <p>{news?.description}</p>
                    <p>{timeAgo(new Date("2021-04-18T21:39:36+06:00"))}</p>
                </div>
            )}
        </div>
    )
}

export default LandingPage