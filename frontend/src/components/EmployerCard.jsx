import React from 'react'
import PropTypes from 'prop-types';
const EmployerCard = ({employer}) => {
  return (
    <div className='employer-box'>
            <img src={employer.logo} alt="" />
            <h2>{employer.name}</h2>
            <h3>{employer.industry}</h3>
            <h4>{employer.website}</h4>
            <p> {employer.description}</p>
    </div>
  )
}
EmployerCard.propTypes = {
    employer: PropTypes.object
}
export default EmployerCard
