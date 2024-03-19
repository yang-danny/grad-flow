import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import Spinner from './Spinner';
import {FETCH_EMPLOYER_BY_ID} from '../graphql/employerQueries'
import { MdOutlineLocationOn,MdOutlineMail,MdOutlinePhoneInTalk,MdOutlineContactPhone } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { TbWorldWww,TbPlus } from "react-icons/tb";
import {FETCH_EMPLOYER_JOBS} from "../graphql/jobQueries"
import JobCard from './JobCard';
const EmployerDetails = () => {
    const {employerId} =useParams()
    const { loading:employerLoading, error:employerError, data:employerData} =useQuery(FETCH_EMPLOYER_BY_ID, { variables: { employerId } })
    const { loading:employerJobsLoading, error:employerJobsError, data:employerJobsData} =useQuery(FETCH_EMPLOYER_JOBS, { variables: { employer:employerId } })
    
    const employer=employerData?.getEmployer
    const employerJobs=employerJobsData?.getEmployerJobs 
  
    if (employerLoading || employerJobsLoading) return <Spinner />;
    if (employerError || employerJobsError ) return <p>Something Went Wrong</p>;
    return (
      <div className='employer-details'>
      <div className="employer-details-box">
          <div className="employer-details-top">
              <div className='company-info'>
                  <div className="info-left">
                    <img src={employer.logo} alt="" />
                  <h2>{employer.name}</h2>
                  <h4>{employer.description}</h4>          
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
    <MdOutlineLocationOn size={22}/><p>{employer.location}</p>
    </div>
    <div className="industry">
    <LiaIndustrySolid size={22}/><p>{employer.industry}</p>
    </div>
    <div className="web">
    <TbWorldWww size={22}/><p>{employer.website}</p>
    </div>
    <div className="email">
    <MdOutlineMail size={22}/> <p>{employer.email}</p> 
    </div>
    <div className="phone">
    <MdOutlinePhoneInTalk size={22}/><p>{employer.phone}</p> 
    </div>
          </div>
          {employerJobs?.length > 0 && (
            <div className="employer-details-bottom">
            <h2>Jobs posted by {employer.name}</h2>
            <div className="post-jobs-grid">
              {employerJobs.map((job)=>(
               <JobCard job={job} key ={job.id} />
              ))}
            </div>
        </div>
          )}
      </div>
  </div>
  )
}

export default EmployerDetails
