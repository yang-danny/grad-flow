import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { useQuery } from '@apollo/react-hooks';
import Spinner from './Spinner';
import {FETCH_NEWS} from '../graphql/newQueries'
import NewsCard from './NewsCard'
import { Link } from 'react-router-dom';
const News = () => {
    const { loading, error, data} =useQuery(FETCH_NEWS)
    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong</p>;
  
    const bigNews = data.getNews[0]
    const smallNews = data.getNews.slice(1,5)
  return (
        <div className='news'>
        <div className="news-box">
            <div className="news-top">
                <h1>Latest News</h1>
                <Link to='/news' className='show-all'>Show all <FaArrowRight size={20}/></Link>
            </div>
            <div className="news-bottom">
                <div className="big-news">
                    <img src={bigNews.photo} alt="" />
                    <p>{bigNews.publishDate}</p>
                    <h2>{bigNews.title}</h2>
                </div>
                <div className="small-news">
                    {smallNews.map((news)=>(
                    <NewsCard news={news} key ={news.id} />
                    ))} 
                </div>
          
            </div>  
        </div>
        </div>
  )
}

export default News