import { useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useForm } from '../../utils/useForm'
import { useMutation } from '@apollo/react-hooks'
import {REGISTER_USER} from '../../graphql/authMutations'
import {useNavigate, Link} from 'react-router-dom'
import { FiUserPlus,FiUser } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { TiTickOutline } from "react-icons/ti";
import Spinner from '../../components/Spinner'
const Register = () => {
    const context= useContext(AuthContext)
    let navigate = useNavigate()
    const [errors, setErrors] = useState([])

       const registerUserCallback=()=>{
        registerUser()
    } 
    const {onChange, onSubmit, values}= useForm(registerUserCallback,{
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const [registerUser, {loading}]= useMutation(REGISTER_USER,{
        update(proxy, {data: {registerUser:userData}}){
            context.login(userData)
            navigate('/')
        },
        onError({graphQLErrors}){
            setErrors(graphQLErrors);
        },
        variables:{registerInput:values}
    })
    if (loading) return <Spinner />;
  return (
    <div className='register'>
      <div className="register-box">
      <div className="info">
      <div className="header">
          <h2>Register</h2>
        <FiUserPlus size={32}/> 
      </div>
     <div className="username">
       <input
            type="text"
            placeholder="&nbsp;&nbsp;Username"
            required
            name="username"
            onChange={onChange}
          />
           <i><FiUser /></i>
     </div>
       <div className="email">
          <input
            type="text"
            placeholder="&nbsp;&nbsp;Email"
            required
            name="email"
            onChange={onChange}
          />
          <i><AiOutlineMail /></i>
       </div>
        <div className="password">
           <input
            type="password"
            placeholder="&nbsp;&nbsp;Password"
            required
            name="password"
            onChange={onChange}
          />
          <i><CiLock /></i>
        </div>
         <div className="confirm">
          <input
            type="password"
            placeholder="&nbsp;&nbsp;Confirm Password"
            required
            name="confirmPassword"
            onChange={onChange}
          />
          <i><TiTickOutline /></i>
         </div>
          
          <button onClick={onSubmit}>
            Register
          </button>
        <span className='function-links'>
          <p>Already an account?</p>
          <Link className='links' to="/login">Login</Link>
        </span>
        {errors.length > 0 && (
        <div className="error">
          <ul className="list">
        {errors.map((error)=>{
           return (
            <li key={error}>{error.message}</li>
           ) 
        })}
          </ul>
        </div>
      )}
      </div>  
      </div>
      
    </div>
  )
}

export default Register
