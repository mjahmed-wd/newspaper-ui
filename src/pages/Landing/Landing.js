import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeadingNews from '../../components/LeadingNews';
import NewsTitles from '../../components/NewsTitles';
import NewsWithImage from '../../components/NewsWithImage';
import NewsWithNoImage from '../../components/NewsWithNoImage';
import { getNewsData } from '../../utils/helper';


const LandingPage = () => {
    const [allNews, setAllNews] = useState({});

    useEffect(() => {
        getNewsData(setAllNews)
    }, [])

    return (
        <div className="container">
            <div className="news-container">
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
            </div>
            <div className="ads_and_features_section">
                <div className="ad_placement">
                    Ad Placement
                </div>
                <div className="features_section">
                    <Link to={`/news`}>
                        <img src={allNews?.featureLead?.photo} alt="" />
                        <NewsTitles variant="h2">{allNews?.featureLead?.title}</NewsTitles>
                    </Link>
                </div>
                {allNews?.featureNews && <NewsWithImage news={allNews?.featureNews} />}
            </div>
        </div>
    )
}

export default LandingPage