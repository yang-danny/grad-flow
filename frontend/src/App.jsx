import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import "./sass/index.scss";
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Download from './components/Download.jsx'
import JobDetails from './components/JobDetails.jsx'
import CandidateDetail from './components/CandidateDetail.jsx'
import NewsDetails from './components/NewsDetails.jsx'
import JobSearch from './pages/job/jobSearch.jsx'
import JobSearchResult from './components/JobSearchResult.jsx'
function App() {
 
  return (
    <div className='app-container'>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/jobsearch' element={<JobSearch />} />
        <Route path='/jobsearchresult' element={<JobSearchResult />} />
        <Route path='/jobs/:jobId' element={<JobDetails />} />
        <Route path='/candidate/:candidateId' element={<CandidateDetail />} />
        <Route path='/news/:newsId' element={<NewsDetails />} />
      </Routes>
      <Download />
      <Footer />
    </div>
  )
}

export default App
