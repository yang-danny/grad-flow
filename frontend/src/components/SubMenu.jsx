import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
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
SubMenu.propTypes = {
  menu: PropTypes.object
}
export default SubMenu
