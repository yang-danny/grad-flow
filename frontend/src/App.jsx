import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import "./sass/index.scss";
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Download from './components/Download.jsx'
import JobDetails from './components/JobDetails.jsx'
import NewsDetails from './components/NewsDetails.jsx'
import JobSearch from './pages/job/JobSearch.jsx'
import ResearchEmployers from './pages/job/ResearchEmployers.jsx'
import JobSearchResult from './components/JobSearchResult.jsx'
import CVCL from './pages/cvcl/CVCL.jsx'
import ELearning from './pages/e-learning/ELearning.jsx'
import CourseDetails from './components/CourseDetails.jsx'
import CareerSkills from './pages/e-learning/CareerSkills.jsx';
import ITSkills from './pages/e-learning/ITSkills.jsx';
import BusinessSkills from './pages/e-learning/BusinessSkills.jsx';
import Mentoring from './pages/mentoring/Mentoring.jsx';
import EmployerDetails from './components/EmployerDetails.jsx';
import CandidateDetails from './components/CandidateDetail.jsx';
import FindRecruiter from './pages/job/FindRecruiter.jsx';
import RecruiterDetails from './components/RecruiterDetails.jsx';

function App() {
 
  return (
    <div className='app-container'>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/jobsearch' element={<JobSearch />} />
        <Route path='/researchemployers' element={<ResearchEmployers />} />
        <Route path='/findrecruiter' element={<FindRecruiter />} />
        <Route path='/jobsearchresult' element={<JobSearchResult />} />
        <Route path='/jobs/:jobId' element={<JobDetails />} />
        <Route path='/employer/:employerId' element={<EmployerDetails />} />
        <Route path='/candidate/:candidateId' element={<CandidateDetails />} />
        <Route path='/recruiter/:recruiterId' element={<RecruiterDetails />} />
        <Route path='/news/:newsId' element={<NewsDetails />} />
        <Route path='/cvcl' element={<CVCL />} />
        <Route path='/e-learning' element={<ELearning />} />
        <Route path='/courses/:courseId' element={<CourseDetails />} />
        <Route path='/career' element={<CareerSkills />} />
        <Route path='/it' element={<ITSkills />} />
        <Route path='/business' element={<BusinessSkills />} />
        <Route path='/mentoring' element={<Mentoring />} />
      </Routes>
      <Download />
      <Footer />
    </div>
  )
}

export default App
