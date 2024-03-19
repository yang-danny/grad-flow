import { useEffect, useState } from 'react'
import {useQuery,useLazyQuery} from '@apollo/react-hooks';
import { FiSearch,FiTag } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import {FETCH_RECRUITER_SERVICE, SEARCH_RECRUITERS} from "../../graphql/recruiterQueries"
import ReactPaginate from 'react-paginate';
import Spinner from '../../components/Spinner';
import RecruiterCard from '../../components/RecruiterCard';
const FindRecruiter = () => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [service, setService] = useState('')
  const [field, setField] = useState('name')
  const [order, setOrder] = useState('ASC')
  const [sort, setSort] = useState('Low')

  const services =useQuery(FETCH_RECRUITER_SERVICE)
  const mergedArr=[].concat(...services.data?.getServices.map(obj=>obj.service) ||  [])
  let uniqueService = mergedArr.filter((value, index, self) => self.indexOf(value) === index);

  const [getRecruiters, { loading, error, data }] = useLazyQuery(SEARCH_RECRUITERS,{         
    variables: {
    "recruiterSearchFilter":{
        "name":name,  
        "location": location,
        "service": service
    },
    "sortBy":{"field":field,"order":order}
    }
  });

useEffect(() => {
  if(sort==='Title: A-Z'){
    setField("name")
    setOrder("ASC")
    } else {
    setField("name")
    setOrder("DESC")
    }
    }, [sort])
    const items=data?.searchRecruiters
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage=8
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
    <div className='find-recruiter'>
    <div className="find-recruiter-box">
        <div className="title">
            <h1>Find top recruitment agencies and recruiters</h1>
            <p>Struggling to find top recruiters? We asked industry leaders to share their insights and advice to attract and retain quality recruitment talent.</p>
        </div>
       <div className="search-bar">
        <div className="recruiter">
        <h2>Recruiter</h2>
        <div className="input-box">
            <FiSearch size={26} className='icons'/>
            <input type="text" id='title' 
            placeholder='Recruiter or Agency name  ' 
            required
            value={name|| ''}
            onChange={(e) => setName(e.target.value)}
            />   
        </div>
        </div>
        <div className="location">
            <h2>Where</h2> 
            <div className="input-box">
            <MdOutlineLocationOn size={30} className='icons'/>
            <input type="text" id='location' 
            placeholder='City or postcode' 
            required
            value={location|| ''}
            onChange={(e) => setLocation(e.target.value)}
            />
            </div>
        </div>
        <div className="service">
        <h2>Service</h2>
        <div className="input-box">
          <FiTag size={26} className='icons'/>
          <select id="type"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
            <option value="Company Industry">Recruiting Service</option>
            {uniqueService?.map((value,index) => (
            <option key={index} 
            value={value}>{value}</option>
            ))}
            </select> 
        </div>
        </div>
        <div className="search-btn">
            <button 
             onClick={getRecruiters}
            >Find Recruiter</button>
        </div>
      </div>
      <div className="search-options">
        <div className="option">
            <h3>IT</h3>
            <span>1000+</span>
        </div>
        <div className="option">
            <h3>Accounting</h3>
            <span>500+</span>
        </div>
        <div className="option">
            <h3>Finance</h3>
            <span>500+</span>
        </div>
        <div className="option">
            <h3>Marketing</h3>
            <span>200+</span>
        </div>
        <div className="option">
            <h3>Sydney Based</h3>
            <span>1000+</span>
        </div>
        <div className="option">
            <h3>Melbourne Based</h3>
            <span>1000+</span>
        </div>
        <div className="option">
            <h3>Canberra Based</h3>
            <span>500+</span>
        </div>
        <div className="option">
            <h3>Brisbane Based</h3>
            <span>500+</span>
        </div>
        <div className="option">
            <h3>Adelaide Based</h3>
            <span>200+</span>
        </div>
        <div className="option">
            <h3>Perth Based</h3>
            <span>200+</span>
        </div>
        <div className="option">
            <h3>Hobart Based</h3>
            <span>100+</span>
        </div>
        <div className="option">
            <h3>Townsville Based</h3>
            <span>100+</span>
        </div>
        </div>
      </div>
      {currentItems.length>0 ? (
              <div className="find-recruiter-result">
              <div className="find-recruiter-result-title">
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
            <div className="find-recruiter-result-bottom">
            {loading && <Spinner />}
            {error && <p>Something Went Wrong</p>}
            {currentItems.map((recruiter)=>(
            <RecruiterCard recruiter={recruiter} key ={recruiter.id} />
            ))}
            </div>
            </div>
      ): (<></>)}
      </div>
  )
}

export default FindRecruiter