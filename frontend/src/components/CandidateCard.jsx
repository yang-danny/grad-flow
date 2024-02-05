import React from 'react'
import PropTypes from 'prop-types';
const CandidateCard = ({candidate}) => {
  return (
    <div className='card-box'>
        <div className="card-left">
            <div className="candidate-avatar">
              <img src={candidate.avatar} alt="" />   
            </div>
       <div className="candidate-info">
       <h2>{candidate.firstname} {candidate.lastname}</h2>
      <p>{candidate.city}, {candidate.country}</p>  
       </div>
         
        </div>
      <div className="card-right">
        <h2>{candidate.role}</h2>
        <button>View Profile</button>
      </div>

    </div>
  )
}
CandidateCard.propTypes = {
    candidate: PropTypes.object
}
export default CandidateCard