import { AiOutlineMail } from "react-icons/ai";
import {Link } from "react-router-dom"
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../assets/logo-blue.png';
const Footer = () => {
  return (
   <footer>
    <div className="footer-box">
    <div className="top">
    <div className="contact">
    <img src={logo} alt="" />
    <h3>Call us on 123 456 789</h3>
    <p>1 Sydney Street, Sydney NSW 2000</p>
    <p>Australia</p>
    </div>
    <div className="site-links">
    <ul className="about">
        <h3>About</h3>
        <li><Link className='link'>About Grad Flow</Link></li>
        <li><Link className='link'>Terms & Policy</Link></li>
        <li><Link className='link'>Careers</Link></li>
        <li><Link className='link'>News & Events</Link></li>
    </ul>
    <ul className="help">
    <h3>Help</h3>
    <li><Link className='link'>Help & FAQs</Link></li>
    <li><Link className='link'>Member Center</Link></li>
    <li><Link className='link'>Online Chat</Link></li>
    <li><Link className='link'>Contact Us</Link></li>
    </ul>
    <ul className="candidates">
    <h3>For Candidates</h3>
    <li><Link className='link'>Browse Jobs</Link></li>
    <li><Link className='link'>Candidate Dashboard</Link></li>
    <li><Link className='link'>Resources</Link></li>
    <li><Link className='link'>Media Kit</Link></li>
    </ul>
    </div>
    <div className="join-us">
    <h3>Join Us On</h3>
    <p>The latest job news, resources, sent to your inbox weekly.</p>
    <input type="text" className="email" placeholder="&nbsp;&nbsp;Email"/>
    <AiOutlineMail className='mail-icon'/>
    </div>
    </div>
    <div className="bottom">
        <p className="copy-right">
        2023 @ Grad Flow. All rights reserved.
        </p>
        <div className="social-media">
            <ul>
                <li><Link className='link'><FaLinkedinIn /></Link></li>
                <li><Link className='link'><FaFacebookF /></Link></li>
                <li><Link className='link'><FaTwitter /></Link></li>
                <li><Link className='link'><FaYoutube /></Link></li>
            </ul>
        </div>
    </div>
    </div>
   </footer>
  )
}

export default Footer