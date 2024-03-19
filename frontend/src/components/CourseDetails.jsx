import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import {FETCH_COURSE_BY_ID} from '../graphql/courseQueries'
import Spinner from './Spinner';
import { FaStairs } from "react-icons/fa6";
import { MdSubject,MdOutlineTimer,MdOutlineHandshake } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { GiMightySpanner } from "react-icons/gi";
import { FaRegPlayCircle } from "react-icons/fa";
const CourseDetails = () => {
    const {courseId} =useParams()
    const { loading, error, data} =useQuery(FETCH_COURSE_BY_ID, { variables: { courseId } })
    if (loading) return <Spinner />;
    if (error) return <p>Something Went Wrong</p>;
    const course = data?.getCourse
    return (
        <div className='course-details'>
        <div className="course-details-box">
        <div className="course-details-left">
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <div className="tags">
        <div className="provider"><MdOutlineHandshake className='icons' size={20} />
            <img src={course.provider.logo} alt="" />
        </div>
        <div className="level"><FaStairs className='icons' size={18}/>{course.level}</div>
        <div className="subject"><MdSubject className='icons' size={20}/>{course.subject}</div>
        <div className="type"><PiBookOpenTextLight className='icons' size={20}/>{course.type}</div>
        <div className="duration"><MdOutlineTimer className='icons' size={20}/>{course.duration}</div>
        <div className="skills"><GiMightySpanner className='icons' size={20}/>{course.skills}</div>
        </div>
        </div>
        <div className="course-details-right">
            <img src={course.photo} alt="" />
            <div className="launch">
                <FaRegPlayCircle size={25} className='play'/>
                <button>Launch Course</button>
            </div>
        </div>
        </div>
        </div>
  )
}

export default CourseDetails
