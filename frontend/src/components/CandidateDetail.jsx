import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import { useQuery } from '@apollo/react-hooks';
import {FETCH_CANDIDATE_BY_ID} from '../graphql/candidateQueries'
import EmployerCard from './EmployerCard';
const CandidateDetails = () => {
    const {candidateId} =useParams()
    const { loading, error, data} =useQuery(FETCH_CANDIDATE_BY_ID, { variables: { candidateId } })
    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong</p>;
    const candidate=data.getCandidate
  return (
    <div className="candidate-details">
        <div className="candidate-details-box">
                <div className="candidate-info-box"> 
                <img src={candidate.avatar} alt="" /> 
                <div className="candidate-info">
                 <h2>{candidate.firstname} {candidate.lastname}</h2>
                <h3>{candidate.role}</h3>
                <p>Address: {candidate.address},{candidate.city},{candidate.country}</p>
                <p>Email: {candidate.email}</p>
                <p>Phone: {candidate.phone}</p>
                <p>School: {candidate.school}</p>
                <p>Degree: {candidate.degree}</p>   
                </div> 
                </div>
                <div className="employer-info">
                    {candidate.employers.length>0?(
                        <>
                        <h1>Work Experiences:</h1>
                        <div className="employer-container">
                         {candidate.employers.map(employer =>(
                        <EmployerCard key={employer.id} employer={employer} />
                    ))} 
                        </div>
                        </>
                    ):(
                        <>
                          <h1>No Work Experiences...</h1>
                        </>
                    )}  
                </div>
        </div>
    </div>
  )
}

export default CandidateDetails
