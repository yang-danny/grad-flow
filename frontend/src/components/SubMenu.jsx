import React from 'react'
import { Link } from 'react-router-dom'

const SubMenu = ({menu}) => {
  return (
<ul className="menu">
    {menu.subMenu.map((sub, i)=>(
        <li key={i} className="list-menu">
        <div className="nav-menu">
            <Link className='sub-links' to={sub.path}>{sub.title}</Link>
        </div>
        </li>
    ))}
</ul>
  )
}

export default SubMenu
