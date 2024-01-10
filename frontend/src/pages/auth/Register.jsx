import { useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useForm } from '../../utils/useForm'
import { useMutation } from '@apollo/react-hooks'
import {REGISTER_USER} from '../../graphql/authMutations'
import {useNavigate, Link} from 'react-router-dom'

const Register = (props) => {
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

  return (
    <div>
        <h2>Register</h2>
        
        <input
            type="text"
            placeholder="Username"
            required
            name="username"
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="Email"
            required
            name="email"
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            name="confirmPassword"
            onChange={onChange}
          />
          <button onClick={onSubmit}>
            Register
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
          <p>Already an account?</p>
          <Link to="/login">Login</Link>
        </span>
    </div>
  )
}

export default Register
