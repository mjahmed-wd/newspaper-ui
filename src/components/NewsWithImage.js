import React from 'react'
import { Link } from 'react-router-dom'
import Image from './Image'
import NewsTimes from './NewsTimes'
import NewsTitles from './NewsTitles'

const NewsWithImage = ({ news }) => {
    return (

        <div className="news" style={{ display: 'flex' }}>

            <div className="lg-w-40">
                <Link to={`/#`}>
                    <Image news={news} />
                </Link>
            </div>

            <div style={{ width: "60%", paddingLeft: "1rem" }}>
                <Link to={`/#`}>
                    <NewsTitles variant="h2" subTitle={news?.["sup-title"]}>{news?.title}</NewsTitles>
                </Link>
                <NewsTimes>{news?.time}</NewsTimes>
            </div>
        </div>
    )
}

export default NewsWithImage