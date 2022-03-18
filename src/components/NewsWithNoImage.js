import React from 'react'
import NewsDescription from './NewsDescription'
import NewsTimes from './NewsTimes'
import NewsTitles from './NewsTitles'

const NewsWithNoImage = ({ news }) => {
    return (
        <div className="news">
            <NewsTitles variant="h2">{news?.title}</NewsTitles>
            <NewsDescription>{news?.description}</NewsDescription>
            <NewsTimes>{news?.time}</NewsTimes>
        </div>
    )
}

export default NewsWithNoImage