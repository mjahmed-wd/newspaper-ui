import React from 'react'

const NewsTitles = ({ variant, color = 'black', subTitle, children }) => {
    const CustomTag = `${variant}`
    return (
        <CustomTag className="news_titles">
            {subTitle && <>
                <span style={{ color: "#D60000" }}>{subTitle}</span>
                <span> / </span>
            </>}
            <span>{children}</span>
        </CustomTag>
    )
}

export default NewsTitles