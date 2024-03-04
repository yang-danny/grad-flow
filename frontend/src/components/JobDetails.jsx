import { useParams } from 'react-router-dom';
import {FETCH_JOB_BY_ID} from '../graphql/jobQueries'
import { useQuery } from '@apollo/react-hooks';
import Spinner from './Spinner';
import { MdOutlineLocationOn,MdMoney,MdOutlineStairs,MdSchedule } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import { IoShieldCheckmarkOutline } from "react-icons/io5"
import { RiCalendarCloseLine } from "react-icons/ri";
const JobDetails = () => {
    const {jobId} =useParams()
    const { loading, error, data} =useQuery(FETCH_JOB_BY_ID, { variables: { jobId } })
    
    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong</p>;
    const job=data.getJob
  return (
    <div className='job-details'>
        <div className="job-details-box">
            <div className="job-details-top">
                <div className='company-info'>
                    <div className="info-left">
                      <img src={job.employer.logo} alt="" />
                    <h2>{job.title}</h2>
                     <h3>{job.employer.name}</h3>      
                    </div>
                 <div className="info-right">
                    <button className='btn-apply'>Apply</button>
                    <button className='btn-save'>Save</button>
                    <button className='btn-forward'>Forward</button>
                 </div>
                </div>
                   
        <div className="location">
             <MdOutlineLocationOn size={22}/><p>{job.location}</p>
        </div>
              <div className="category">
              <FiTag size={20}/><p>{job.category}</p>
              </div>
              <div className="salary">
              <MdMoney size={20}/> <p>Salary: ${job.salary}</p>
                </div>
                <div className="type">
                <BsBriefcase size={20}/> <p>Job Type: {job.type}</p>
                </div>
                <div className="level">
                <MdOutlineStairs size={22}/><p>Job Level: {job.level}</p>
                </div>
                <div className="shift">
                <MdSchedule size={20}/> <p>Job Shift or schedule: {job.shift}</p>
                </div>
                <div className="eligibility">
                <IoShieldCheckmarkOutline size={20}/> <p>Work Eligibility: {job.eligibility}</p>
                </div>
                <div className="closeDate">
                <RiCalendarCloseLine size={20} />  <p>Close Date: {job.closeDate}</p>
                </div>
            </div>
            <div className="job-details-bottom">
                <h2>Job Description</h2>
            <p>{job.description}</p>
            </div>
        </div>
      
    </div>
  )
}

export default JobDetails
