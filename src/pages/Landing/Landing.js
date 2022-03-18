import React, { useEffect, useState } from 'react';
import NewsWithNoImage from '../../components/NewsWithNoImage';
import { getNewsData } from '../../utils/helper';
import { timeAgo } from "./../../assets/functions/timeAgo";

const LandingPage = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsData(setNews)
    }, [])

    return (
        <div className="container grid-container">
            <span className="leadNews"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quam, minus labore vel mollitia, iure qui totam debitis voluptatem commodi non in repudiandae? Commodi quos impedit tempora laborum rerum maiores suscipit sapiente eveniet porro, consequuntur, natus ullam amet temporibus quam libero aut earum doloremque animi laudantium adipisci sequi harum consequatur! </span>
            <>
                {news?.map(news => <NewsWithNoImage key={news?.id} news={news} />
                )}
            </>
            <span className="ad">Ad</span>
            <span className="feature">feature</span>
        </div>
    )
}

export default LandingPage