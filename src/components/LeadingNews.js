import React from 'react'
import NewsDescription from './NewsDescription'
import NewsTimes from './NewsTimes'
import NewsTitles from './NewsTitles'

const LeadingNews = ({ news }) => {
  console.log(news)
  return (
    <div className="leadNews">
      <div style={{ width: "45%" }}>
        <NewsTitles variant="h1">{news?.title}</NewsTitles>
        <NewsDescription>{news?.description}</NewsDescription>
        <NewsTimes>{news?.time}</NewsTimes>
      </div>
      <div className="leadNews_image_section">
        <div className="image_container">
          <img src={news?.photo} alt={news?.title} style={{ width: "100%" }} />
        </div>
        <span className="news_description">হাতে, কাঁধের নিচে | তাহমিদ ইসলাম</span>
      </div>
    </div>
  )
}

export default LeadingNews