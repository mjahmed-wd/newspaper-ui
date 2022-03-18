import React from 'react'

const NewsTitles = ({ variant, children }) => {
    const CustomTag = `${variant}`
    return (
        <CustomTag className="news_titles">{ children}</CustomTag>
    )
}

export default NewsTitles