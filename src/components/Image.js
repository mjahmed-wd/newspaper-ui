import React from 'react'


const Image = ({ news, maxWidth = "100px", maxHeight = "100px" }) => {
    return (
        <img src={news?.photo} alt={news?.title} style={{ width: "100%", maxWidth: maxWidth, height: "100%", maxHeight: maxHeight }} />
    )
}

export default Image