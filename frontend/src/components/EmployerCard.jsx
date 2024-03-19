import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const EmployerCard = ({employer}) => {
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };
  return (
    <div className='employer-box'>
        <div className="employercard-top">
            <div className="company-logo">
              <img src={employer.logo} alt="" />   
            </div>
       <div className="company-info">
       <Link className='employer-name' to={`/employer/${employer.id}`}>{employer.name}</Link>
      <p>{employer.location}</p>  
       </div>
        </div>
      <div className="employercard-mid">
      <h3>{employer.industry}</h3>
      <p>{shortenText(employer.description, 50)}</p>
      </div>
    </div>
  )
}
EmployerCard.propTypes = {
    employer: PropTypes.object
}
export default EmployerCard
