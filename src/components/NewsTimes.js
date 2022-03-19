import React from 'react'
import { timeAgo } from '../assets/functions/timeAgo'

const NewsTimes = ({ children }) => {
    return (
        <p className="news_time_ago">{timeAgo(children)}</p>
    )
}

export default NewsTimes