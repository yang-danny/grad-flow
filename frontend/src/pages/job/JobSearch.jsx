import { useState } from 'react'
import { FiSearch,FiTag } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {useQuery} from '@apollo/react-hooks';
import { FETCH_JOB_TYPES } from '../../graphql/jobQueries';
const JobSearch = () => {
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [type, setType] = useState('')
    const navigate = useNavigate();
    
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

    <div className='jobsearch'>
    <div className="jobsearch-box">
        <div className="title">
            <h1>Discover your FIRST dream job</h1>
            <p>Get started by setting what type of future placement, internship or graduate job you’re looking for and when you’re likely to want to start.Setting preferences means we’ll email you as soon as new jobs are posted that match. Click save to run this job search now.</p>
        </div>
       <div className="search-bar">
        <div className="what">
        <h2>What</h2>
        <div className="input-box">
          <FiSearch size={26} className='icons'/>
            <input type="text" id='title' 
            placeholder='Job titles, key words or company...  ' 
            required
            value={title|| ''}
            onChange={(e) => setTitle(e.target.value)}/>   
        </div>
       
        </div>
        <div className="where">
           <h2>Where</h2> 
            <div className="input-box">
                <MdOutlineLocationOn size={30} className='icons'/>
            <input type="text" id='location' 
            placeholder='City or postcode' 
            required
            value={location|| ''}
            onChange={(e) => setLocation(e.target.value)}/>
                </div>
        
        </div>
        <div className="type">
        <h2>Type</h2>
        <div className="input-box">
          <FiTag size={26} className='icons'/>
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
        
        </div>
        <div className="search-btn">
            <button onClick={updateSearchFilter}>Find Jobs</button>
        </div>

      </div>
      <div className="search-options">
        <div className="option">
            <h3>Graduate Programs</h3>
            <span>1000+</span>
        </div>
        <div className="option">
            <h3>Internships Jobs</h3>
            <span>500+</span>
        </div>
        <div className="option">
            <h3>Part-time Jobs</h3>
            <span>500+</span>
        </div>
        <div className="option">
            <h3>Volunteer Jobs</h3>
            <span>200+</span>
        </div>
        <div className="option">
            <h3>Grad Jobs Sydney</h3>
            <span>1000+</span>
        </div>
        <div className="option">
            <h3>Grad Jobs Melbourne</h3>
            <span>1000+</span>
        </div>
        <div className="option">
            <h3>Grad Jobs Canberra</h3>
            <span>500+</span>
        </div>
        <div className="option">
            <h3>Grad Jobs Brisbane</h3>
            <span>500+</span>
        </div>
        <div className="option">
            <h3>Grad Jobs Adelaide</h3>
            <span>200+</span>
        </div>
        <div className="option">
            <h3>Grad Jobs Perth</h3>
            <span>200+</span>
        </div>
        <div className="option">
            <h3>Grad Jobs Hobart</h3>
            <span>100+</span>
        </div>
        <div className="option">
            <h3>Grad Jobs Townsville</h3>
            <span>100+</span>
        </div>
        </div>
      </div>
      </div>

  )
}

export default JobSearch
