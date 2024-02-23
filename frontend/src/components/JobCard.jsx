import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const JobCard = ({job})=> {

    const shortenText = (text, n) => {
        if (text.length > n) {
          const shortenedText = text.substring(0, n).concat("...");
          return shortenedText;
        }
        return text;
      };
    
    return (
    <div className='jobcard-box'>
        <div className="jobcard-top">
            <div className="company-logo">
              <img src={job.employer.logo} alt="" />   
            </div>
       <div className="company-info">
       <h2>{job.employer.name}</h2>
      <p>{job.location}</p>  
       </div>
         
        </div>
      <div className="jobcard-mid">
        <Link className='job-title' to={`/jobs/${job.id}`}>{job.title}</Link>
      <p>{shortenText(job.description, 50)}</p>
      </div>
      <div className="jobcard-bottom">
        <div className="category">{job.category}</div>
      <div className="type">{job.type}</div>
      </div>
    </div>
  )
}
JobCard.propTypes = {
    job: PropTypes.object
}
export default JobCard