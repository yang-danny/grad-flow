import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import { useQuery } from '@apollo/react-hooks';
import CandidateCard from './CandidateCard';
import {FETCH_CANDIDATES} from '../graphql/candidateQueries'
const Candidates = () => {
    const { loading, error, data} =useQuery(FETCH_CANDIDATES)
if (loading) return <Spinner />;
if (error) return <p>Something Went Wrong</p>;
  return (
    <div className='candidates'>
        <div className="candidates-box">
            <div className="candidates-top">
            <h1>Featured Candidates</h1>
            <Link to='/candidates' className='show-all'>Show all <FaArrowRight size={20}/></Link>    
            </div>
            <div className="candidates-bottom">
            {data?.getCandidates?.map((candidate)=>(
        <CandidateCard candidate={candidate} key ={candidate.id} />
        ))}
            </div>
        </div>

    </div>
  )
}

export default Candidates