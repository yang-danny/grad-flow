import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const NewsCard = ({news}) => {
  return (
    <Link to={`/news/${news.id}`}>
    <div className='newscard-box'>
        <div className="photo">
          <img src={news.photo} alt="" />   
        </div>
   <div className="news-info">
   <p>{news.publishDate}</p> 
   <h2>{news.title}</h2>
   </div>
</div>
</Link>
  )
}
NewsCard.propTypes = {
  news: PropTypes.object
}
export default NewsCard