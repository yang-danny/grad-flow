import jobapp from '../assets/job-app.png'
import { MdScreenSearchDesktop,MdOutlineEventAvailable,MdMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import apple from '../assets/apple.png';
import google from '../assets/google.png'
import { LuPenSquare } from "react-icons/lu";
const Download = () => {
  return (
    <div className='download'>
        <div className="download-box">
            <dir className="left">
                <img src={jobapp} alt="" />
            </dir>
            <dir className="right">
                <h2>Download & Enjoy</h2>
                <h1>Get the Grad Flow App </h1>
            <dir className="functions">
                <div className="job-search">
                <MdScreenSearchDesktop className='icons'/>
                <h3>Job Search</h3>
                </div>
                <div className="event">
                <MdOutlineEventAvailable className='icons' />
                <h3>Attend Event</h3>
                </div>
                <div className="online">
                <LuPenSquare className='icons'/>
                <h3>Online Study</h3>
                </div>
                <div className="noti">
                <MdMailOutline className='icons'/>
                <h3>Instant Notifications</h3>
                </div>
            </dir>
            <div className="links">
                <Link ><img src={apple} alt=''></img></Link>
                <Link ><img src={google} alt=''></img></Link>
            </div>
            </dir>
        </div>   
    </div>
  )
}

export default Download