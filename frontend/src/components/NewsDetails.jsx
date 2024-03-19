import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import Spinner from './Spinner';
import {FETCH_NEWS_BY_ID} from '../graphql/newQueries'
import { FaUserPen,FaTags,FaCalendarDays } from "react-icons/fa6";
const NewsDetails = () => {
    const {newsId} =useParams()
    const { loading, error, data} =useQuery(FETCH_NEWS_BY_ID, { variables: { newsId } })
    
    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong</p>;
    const news=data.getNew
  return (
    <div className='news-details'>
    <div className="news-details-box">
        <div className="news-top">
        <div className="news-info">
        <h1>{news.title}</h1>
        <div className="author">
        <FaUserPen size={22} className='news-icons'/><h2>{news.author}</h2>
        </div>
        <div className="tag">
        <FaTags size={22} className='news-icons'/><h3>{news.category}</h3>
        </div>
        <div className="date">
        <FaCalendarDays size={22} className='news-icons'/><p>{news.publishDate}</p> 
        </div>  
        </div>
        <div className="news-photo">
            <img src={news.photo} alt="" />
        </div>    
        </div>
        <div className="news-body">
          <p>{news.body}</p>   
        </div>
        </div>
        </div>
  )
}

export default NewsDetails
