import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.jsx'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import "./sass/index.scss";
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
function App() {
 
  return (
    <div className="app-container">
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
