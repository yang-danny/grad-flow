import  { useEffect, useState } from 'react'
import { FiSearch,FiTag } from "react-icons/fi";
import { FaStairs } from "react-icons/fa6";
import {useQuery, useLazyQuery} from '@apollo/react-hooks';
import { FETCH_COURSE_LEVEL,FETCH_COURSE_SUBJECT,SEARCH_COURSES} from '../../graphql/courseQueries';
import CourseCard from '../../components/CourseCard';
import Spinner from '../../components/Spinner';
import ReactPaginate from 'react-paginate';
const ELearning = () => {
  const [title, setTitle] = useState('')
  const [level, setLevel] = useState('')
  const [subject, setSubject] = useState('')
  const [field, setField] = useState('title')
  const [order, setOrder] = useState('ASC')
  const [sort, setSort] = useState('Low')
  const levelsResult =useQuery(FETCH_COURSE_LEVEL)
  const subjectResult =useQuery(FETCH_COURSE_SUBJECT)
 
  const uniqueLevel = levelsResult.data?.getCourseLevel.filter((obj, index) => {
    return index === levelsResult.data?.getCourseLevel.findIndex(o => obj.level === o.level);
    });
  const uniqueSubject = subjectResult.data?.getCourseSubject.filter((obj, index) => {
    return index === subjectResult.data?.getCourseSubject.findIndex(o => obj.subject === o.subject);
    });
  const [getCourses, { loading, error, data }] = useLazyQuery(SEARCH_COURSES,{ variables: {
      "courseSearchFilter":{
          "title":title,  
          "level": level,
          "subject": subject
      },
      "sortBy":{"field":field,"order":order}
  }
  });
  useEffect(() => {
  if(sort==='Title: A-Z'){
   setField("title")
   setOrder("ASC")
   } else {
   setField("title")
   setOrder("DESC")
   }
   }, [sort])
   const items=data?.searchCourses
   const [currentItems, setCurrentItems] = useState([])
   const [pageCount, setPageCount] = useState(0)
   const [itemOffset, setItemOffset] = useState(0);
   const itemsPerPage=6

  useEffect(() => {
       if(items){
         const endOffset = itemOffset + itemsPerPage;
       setCurrentItems(items.slice(itemOffset, endOffset) );
       setPageCount(Math.ceil(items.length / itemsPerPage));  
       }
   }, [itemOffset,itemsPerPage,items])
   
  const handlePageClick = (event) => {
       const newOffset = (event.selected * itemsPerPage) % items.length
       setItemOffset(newOffset);
     };
  return (
 <div className="e-learning">
  <div className="e-learning-box">
    <div className="e-learning-search">
        <div className="title">
            <h1>Develop new career and business skills</h1>
        </div>
        <div className="search-bar">
        <div className="course">
        <h2>Course</h2>
        <div className="input-box">
            <FiSearch size={26} className='icons'/>
            <input type="text" id='title' 
            placeholder='Course titles, key words or company...  ' 
            required
            value={title|| ''}
            onChange={(e) => setTitle(e.target.value)}
            />   
        </div>
        </div>
        <div className="level">
           <h2>Level</h2> 
            <div className="input-box">
                <FaStairs size={26} className='icons'/>
            <select 
             value={level}
             onChange={(e) => setLevel(e.target.value)}
            >
              <option value="Course Level">Course Level</option>
            {uniqueLevel?.map((option) => (
            <option key={option.id} 
            value={option.level}>{option.level}</option>
            ))}
            </select> 
          </div>
        </div>
        <div className="subject">
        <h2>Subject</h2>
        <div className="input-box">
          <FiTag size={26} className='icons'/>
          <select 
             value={subject}
             onChange={(e) => setSubject(e.target.value)}
            >
            <option value="Course Subject">Course Subject</option>
            {uniqueSubject?.map((option) => (
            <option key={option.id} 
            value={option.subject}>{option.subject}</option>
            ))}
            </select> 
        </div>
        </div>
        <div className="search-btn">
            <button 
             onClick={getCourses}
            >Find Course</button>
        </div>
        </div>
        <div className="skill-info">
          <div className="career">
            <h2>Career Skills</h2>
            <ul>
              <li>Being more productive</li>
              <li>Building your personal brand</li>
              <li>Improving workplace skills</li>
              <li>Balancing work and life</li>
            </ul>
          </div>
          <div className="it">
            <h2>IT Skills</h2>
            <ul>
              <li>Microsoft Skills</li>
              <li>Office Equipments</li>
              <li>Internet skills</li>
              <li>AI Technologies</li>
            </ul>
          </div>
          <div className="business">
            <h2>Business Skills</h2>
            <ul>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Leadership</li>
              <li>Customer Services</li>
            </ul>
          </div>
          <div className="resources">
            <h2>Course Resources</h2>
            <ul>
              <li>Textbooks</li>
              <li>Lecture Notes</li>
              <li>Online Materials</li>
              <li>Library Databases</li>
            </ul>
          </div>
        </div>
    </div>
    {currentItems.length>0 ? (
         <div className="e-learning-search-result">
      <div className="e-learning-search-result-title">
        <h1>Search Result</h1>
        <div className="result-diaplay">
        <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< Prev"
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
        activeLinkClassName='active'
      />
        <label >Sort by: 
         <select 
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="Title: A-Z">Title: A-Z</option>
              <option value="Title: Z-A">Title: Z-A</option>
         </select>
         </label>
         </div>
      </div>
    <div className="e-learning-search-result-bottom">
    {loading && <Spinner />}
        {error && <p>Something Went Wrong</p>}
        {currentItems.map((course)=>(
            <CourseCard course={course} key ={course.id} />
        ))}
    </div>
    </div>
    ):(<></>)}
  </div>
 </div>
  )
}

export default ELearning
