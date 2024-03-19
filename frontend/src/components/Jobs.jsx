import { Link } from 'react-router-dom'
import JobCard from './JobCard'
import { FaArrowRight } from "react-icons/fa6";
import { useQuery } from '@apollo/react-hooks';
import {FETCH_JOBS} from '../graphql/jobQueries'
import Spinner from './Spinner';
const Jobs = () => {
    const { loading, error, data} =useQuery(FETCH_JOBS)
    let jobs=[]
    if(data?.getJobs.length>8)
    jobs=data?.getJobs.slice(0,8)
    else jobs=data?.getJobs
    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong</p>;

    return (
    <div className='jobs'>
    <div className="jobs-box">
        <div className="jobs-top">
            <h1>Featured Jobs</h1>
            <Link to='/jobs' className='show-all'>Show all <FaArrowRight size={20}/></Link>
        </div>
        <div className="jobs-bottom">
        {jobs?.map((job)=>(
            <JobCard job={job} key ={job.id} />
        ))}
        </div>  
    </div>
    </div>
  ) 
}
export default Jobs