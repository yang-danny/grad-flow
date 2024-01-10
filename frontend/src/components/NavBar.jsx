import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import {Link, useNavigate} from 'react-router-dom'
const NavBar = () => {
  const {user, logout}= useContext(AuthContext)
  let navigate = useNavigate()
  const onLogout=()=>{
    logout()
    navigate('/')
  }

  return (
    <div>
      <Link to='./'>Grad Flow</Link>
      
      {user? 
      <>
      <p>Hi {user.username}</p>
      <button onClick={onLogout}>Logout</button>
      </>
      :
      <>
      <Link to='./login'>Login</Link> 
      <Link to='./register'>Register</Link>
      </>}
     

    </div>
  )
}

export default NavBar
