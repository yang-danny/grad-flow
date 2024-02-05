import React from 'react'
import PropTypes from 'prop-types';
const NewsCard = ({news}) => {
  return (
    <div className='newscard-box'>
        <div className="photo">
          <img src={news.photo} alt="" />   
        </div>
   <div className="news-info">
   <p>{news.publishDate}</p> 
   <h2>{news.title}</h2>
   </div>
</div>
  )
}
NewsCard.propTypes = {
  news: PropTypes.object
}
export default NewsCard