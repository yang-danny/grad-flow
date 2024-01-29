import React from 'react'
import tech from '../assets/tech-rect.jpg'
import { FiSearch,FiTag } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner-box">
        <div className="banner-info">
        <div className="left">
        <div className="title">
         <h1>Your Future, Our Focus...</h1>
        <p>Great platform for the graduations that launching first job, advancing career journey and achieving career goals.  </p>
        </div>
        <div className="search">
            <div className="title">
            <FiSearch size={28} className='icons'/>
            <input type="text" id='title' placeholder='Job titles, key words or company...  ' />
            </div>
            <div className="location">
            <MdOutlineLocationOn size={30} className='icons'/>
            <input type="text" id='location' placeholder='City or postcode' />
            </div>
            <div className="categories">
            <FiTag size={28} className='icons'/>
            <input type="text" id='categories' placeholder='All Categories' />    
            </div>
            
            <button>Find Jobs</button>
        </div>
        <p>Popular Searches:         Designer, Developer, Web, Engineer, Accountant, Sales...</p>
        </div>
        <div className="right">
            <img src={tech} alt="" />
        </div>
        <div className="triangle"></div>
        </div>
        </div>
    </div>
  )
}

export default Banner