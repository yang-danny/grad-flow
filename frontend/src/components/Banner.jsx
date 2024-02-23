import React, { useState } from 'react'
import tech from '../assets/tech-rect.jpg'
import { FiSearch,FiTag } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import { FETCH_JOB_TYPES } from '../graphql/jobQueries';
const Banner = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [type, setType] = useState('')
    const [jobSearchFilter, setJobSearchFilter]=useState({ 
    title:"", 
    location:"",
    type:""
    })
    const { data} =useQuery(FETCH_JOB_TYPES)
    const unique = data?.getJobTypes.filter((obj, index) => {
      return index === data?.getJobTypes.findIndex(o => obj.type === o.type);
  });
  const updateSearchFilter=() => {
    jobSearchFilter.title=title;
    jobSearchFilter.location=location;
    jobSearchFilter.type=type;
    setJobSearchFilter({...jobSearchFilter})
    navigate('/jobsearchresult',{state:jobSearchFilter})
  }

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
            <input type="text" id='title' 
            placeholder='Job titles, key words or company...  ' 
            required
            value={title|| ''}
            onChange={(e) => setTitle(e.target.value)}/>  
            </div>
            <div className="location">
            <MdOutlineLocationOn size={30} className='icons'/>
            <input type="text" id='location' 
            placeholder='City or postcode' 
            required
            value={location|| ''}
            onChange={(e) => setLocation(e.target.value)}/>
            </div>
            <div className="type">
            <FiTag size={28} className='icons'/>
            <select id="type"
             value={type}
             onChange={(e) => setType(e.target.value)}
            >
              <option value="Job Type">Job Type</option>
            {unique?.map((option) => (
            <option key={option.id} 
            value={option.type}>{option.type}</option>
            ))}
            </select>
            </div>
            
            <button onClick={updateSearchFilter}>Find Jobs</button>
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