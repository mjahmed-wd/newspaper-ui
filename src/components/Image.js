import React from 'react'


const Image = ({ news, maxWidth = "100px", maxHeight = "100px" }) => {
    return (
        <img src={news?.photo} alt={news?.title} className="responsive_image"/>
    )
}

export default Image