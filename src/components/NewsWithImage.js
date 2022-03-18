import React from 'react'
import { Link } from 'react-router-dom'
import Image from './Image'
import NewsTimes from './NewsTimes'
import NewsTitles from './NewsTitles'

const NewsWithImage = ({ news }) => {
    return (

        <div className="news" style={{ display: 'flex' }}>

            <div style={{ width: "25%" }}>
                <Link to={`/news`}>
                    <Image news={news} />
                </Link>
            </div>

            <div style={{ width: "75%", paddingLeft: "1rem" }}>
                <Link to={`/news`}>
                    <NewsTitles variant="h2" subTitle={news?.["sup-title"]}>{news?.title}</NewsTitles>
                </Link>
                <NewsTimes>{news?.time}</NewsTimes>
            </div>
        </div>
    )
}

export default NewsWithImage