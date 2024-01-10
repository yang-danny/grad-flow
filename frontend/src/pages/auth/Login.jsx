import { useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useForm } from '../../utils/useForm'
import { useMutation } from '@apollo/react-hooks'
import {LOGIN_USER} from '../../graphql/authMutations'
import {useNavigate, Link} from 'react-router-dom'


const Login = (props) => {
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

  return (
    <div>
      <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            required
            name="username"
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            onChange={onChange}
          />
         
          <button onClick={onSubmit}>
            Login
          </button>
     
        {errors.length > 0 && (
        <div className="ui error message">
          <ul className="list">
        {errors.map((error)=>{
           return (
            <li key={error}>{error.message}</li>
           ) 
        })}
          </ul>
        </div>
      )}
        <span >
          <Link to="/register">Register</Link>
        </span>
    </div>
  )
}

export default Login
