import React from 'react'
import { Link } from 'react-router-dom'
import NewsDescription from './NewsDescription'
import NewsTimes from './NewsTimes'
import NewsTitles from './NewsTitles'

const NewsWithNoImage = ({ news }) => {
    return (
        <div className="news">
            <Link to={`/#`}>
                <NewsTitles variant="h2">{news?.title}</NewsTitles>
            </Link>
            <NewsDescription>{news?.description}</NewsDescription>
            <NewsTimes>{news?.time}</NewsTimes>
        </div>
    )
}

export default NewsWithNoImage