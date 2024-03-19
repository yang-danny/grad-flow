import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import Spinner from './Spinner';
import { MdOutlineLocationOn,MdOutlineMail,MdOutlinePhoneInTalk,MdOutlineContactPhone } from "react-icons/md";
import { TbWorldWww,TbPlus } from "react-icons/tb";
import {FETCH_RECRUITER_BY_ID } from "../graphql/recruiterQueries"
import {FETCH_RECRUITER_JOBS} from "../graphql/jobQueries"
import JobCard from './JobCard';
const RecruiterDetails = () => {
    const {recruiterId} =useParams()
    const { loading:recruiterLoading, error:recruiterError, data:recruiterData} =useQuery(FETCH_RECRUITER_BY_ID, { variables: { recruiterId } })
    const { loading:recruiterJobsLoading, error:recruiterJobsError, data:recruiterJobsData} =useQuery(FETCH_RECRUITER_JOBS, { variables: { recruiter:recruiterId } })
    
    const recruiter=recruiterData?.getRecruiter || {}
    const recruiterJobs=recruiterJobsData?.getRecruiterJobs || {}

    if (recruiterLoading || recruiterJobsLoading) return <Spinner />;
    if (recruiterError || recruiterJobsError ) return <p>Something Went Wrong</p>;
  return (
      <div className='recruiter-details'>
      <div className="recruiter-details-box">
          <div className="recruiter-details-top">
              <div className='company-info'>
                  <div className="info-left">
                    <img src={recruiter?.logo} alt="" />
                    <h2>{recruiter?.name}</h2>
                     <ul>
                      Services:
                      {recruiter.service?.map((value,index) => (
                      <li key={index} 
                        value={value}>{value}</li>
                      ))} 
                    </ul> 
                  </div>
               <div className="info-right">
                <div className="follow">
                <TbPlus className='icons' size={20}/> <button className='btn-follow'>Follow</button>
                </div>
                <div className="contact">
                <MdOutlineContactPhone className='icons' size={20}/><button className='btn-contact'>Contact</button>
                </div>           
               </div>
              </div>  
    <div className="location">
    <MdOutlineLocationOn size={22}/><p>{recruiter?.location}</p>
    </div>
    <div className="web">
    <TbWorldWww size={22}/><p>{recruiter?.website}</p>
    </div>
    <div className="email">
    <MdOutlineMail size={22}/> <p>{recruiter?.email}</p> 
    </div>
    <div className="phone">
    <MdOutlinePhoneInTalk size={22}/><p>{recruiter?.phone}</p> 
    </div>
          </div>
          {recruiterJobs?.length > 0 && (
            <div className="recruiter-details-bottom">
            <h2>Jobs posted by {recruiter.name}</h2>
            <div className="post-jobs-grid">
              {recruiterJobs.map((job)=>(
               <JobCard job={job} key ={job.id} />
              ))}
            </div>
        </div>
          )}
      </div>
  </div>
  )
}

export default RecruiterDetails
