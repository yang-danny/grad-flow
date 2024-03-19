import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const RecruiterCard = ({recruiter}) => {

  return (
     <div className='recruiter-card-box'>
        <div className="recruiter-card-top">
            <div className="company-logo">
              <img src={recruiter.logo} alt="" />   
            </div>
       <div className="company-info">
       <Link className='recruiter-name' to={`/recruiter/${recruiter.id}`}>{recruiter.name}</Link>
        <p>{recruiter.location}</p>  
       </div>
        </div>
    </div>
  )
}
RecruiterCard.propTypes = {
  recruiter: PropTypes.object
}
export default RecruiterCard