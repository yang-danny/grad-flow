import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaStairs } from "react-icons/fa6";
import { MdSubject,MdOutlineTimer,MdOutlineHandshake } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
const CourseCard = ({course}) => {
    
  return (
    <div className='coursecard-box'>
    <div className="coursecard-top">
          <img src={course.photo} alt="" />   
    </div>
  <div className="coursecard-mid">
    <Link className='course-title' to={`/courses/${course.id}`}>{course.title}</Link>
    <div className="provider"><MdOutlineHandshake className='icons' size={20} />
  <img src={course.provider.logo} alt="" />
  </div>
  </div>
  <div className="coursecard-bottom">
    <div className="level"><FaStairs className='icons' size={18}/>{course.level}</div>
    <div className="subject"><MdSubject className='icons' size={20}/>{course.subject}</div>
  <div className="type"><PiBookOpenTextLight className='icons' size={20}/>{course.type}</div>
  <div className="duration"><MdOutlineTimer className='icons' size={20}/>{course.duration}</div>
  
  </div>
  
</div>
  )
}
CourseCard.propTypes = {
  course: PropTypes.object
}
export default CourseCard