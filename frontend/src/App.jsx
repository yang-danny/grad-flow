import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.jsx'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import NavBar from './components/NavBar.jsx'
function App() {
 

  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>
      
    </>
  )
}

export default App
