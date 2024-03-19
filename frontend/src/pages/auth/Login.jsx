import { useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useForm } from '../../utils/useForm'
import { useMutation } from '@apollo/react-hooks'
import {LOGIN_USER} from '../../graphql/authMutations'
import {useNavigate, Link} from 'react-router-dom'
import { FiUsers,FiUser } from "react-icons/fi";
import { CiLock } from "react-icons/ci";
import Spinner from '../../components/Spinner'

const Login = () => {
    const context= useContext(AuthContext)
    let navigate = useNavigate()
    const [errors, setErrors] = useState([])
    const loginUserCallback=()=>{
        loginUser()
    } 
    const {onChange, onSubmit, values}= useForm(loginUserCallback,{
        username:'',
        password:''
    })
    const [loginUser, {loading}]= useMutation(LOGIN_USER,{
        update(proxy, {data: {loginUser:userData}}){
            context.login(userData)
            navigate('/')
        },
        onError({graphQLErrors}){
            setErrors(graphQLErrors);
        },
        variables:{loginInput:values}
    })
    if (loading) return <Spinner />;
  return (
    <div className='login'>
      <div className="login-box">
      <div className="info">
        <div className="header">
          <h2>Login</h2> 
          <FiUsers size={32}/>
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
          <button onClick={onSubmit}>
            Login
          </button>
        <span className='function-links'>
          <p>Do not have an account?</p>
          <Link className='links' to="/register">Register</Link>
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

export default Login
