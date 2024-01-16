import React, { useState, useContext } from 'react'
import logo from '../assets/logo.png'
import { Link,useNavigate } from 'react-router-dom'
import { MdKeyboardArrowDown } from "react-icons/md";
import SubMenu from './SubMenu';
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { AuthContext } from '../context/AuthContext'
const dropMenu=[
    {
        title: 'Home',
        path:"/"
    },
    {
        title:"Job Hub",
        path:"/jobs",
        subMenu: [
            {
                title:"Job Search",
                path:"jobs"
            },
            {
                title:"Research Employers",
                path:"employers"
            },
            {
                title:"Find Recruiters",
                path:"recruiters"
            },
        ]
    },
    {
        title:"CV",
        path:"/cv",
        subMenu: [
            {
                title:"CV Builder",
                path:"cv-builder"
            },
            {
                title:"CV Checker",
                path:"cv-checker"
            },
            {
                title:"Cover Letter Builder",
                path:"cover-letter"
            },
            {
                title:"Interview Preparation",
                path:"interview"
            },
        ]
    },
    {
        title:"e-Learning",
        path:"/e-learning",
        subMenu: [
            {
                title:"Career Skills",
                path:"career-skills"
            },
            {
                title:"IT Skills",
                path:"it-skills"
            },
            {
                title:"Business Skills",
                path:"business-skills"
            },
        ]
    },
    {
        title:"Mentoring",
        path:"/mentoring",
        subMenu: [
            {
                title:"Career Mentorship",
                path:"career-mentorship"
            },
            {
                title:"Mock Interview",
                path:"mock-interview"
            },
            {
                title:"Employability Programme",
                path:"employability-programme"
            },
        ]
    },
]
const Header = () => {
    const {user, logout}= useContext(AuthContext)
    let navigate = useNavigate()
    const onLogout=()=>{
      logout()
      navigate('/')
    }
const [navState, setNavState] = useState(false);
return (
<nav>
    <div className="brand-container">
        <div className="brand">
        <Link to='/'><img src={logo}/></Link>
        </div>

    </div>
    <div className={`links-container ${navState ? "nav-visible" : ""}`}>
    <ul className="links">
    {dropMenu.map((menu,i)=>(
                    <li key={i} className="list-menu">
                        <div className='nav-menu'>
                            <Link to={menu.path} className='link'>{menu.title}</Link>
                            {menu.subMenu && (
                                <span className='menu-icon'><MdKeyboardArrowDown /></span>
                            )}
                        </div>
                        {menu.subMenu && (
                            <div className="sub-menu">
                                <SubMenu menu={menu} />
                            </div>
                        )}
                    </li>
                ))}
    </ul>
  
        {user? (
            <div className='logged'>
            <p>Hi, {user.username}!</p>
      <button onClick={onLogout}>Logout</button>
      </div>
        ):(
            <div className='auth'>
             <Link className='auth-links' to='/login'>Login</Link>
      <span className='auth-links' >&#47;</span>
      <Link className='auth-links' to='/register'>Register</Link>
      </div>
        )}
     
    
</div>
  
      
      <span className='bar-menu'>
        {navState?(
            <AiOutlineClose onClick={() => setNavState(false)} />
        ):(
            <AiOutlineBars onClick={() => setNavState(true)}/>
        )}
        
      </span>
</nav>
)
}

export default Header
