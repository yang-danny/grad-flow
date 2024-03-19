import React, { useEffect, useState } from 'react'
import { FiSearch,FiTag } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import {useQuery,useLazyQuery} from '@apollo/react-hooks';
import {FETCH_EMPLOYER_INDUSTRY, SEARCH_EMPLOYERS} from '../../graphql/employerQueries'
import Spinner from '../../components/Spinner';
import ReactPaginate from 'react-paginate';
import EmployerCard from '../../components/EmployerCard';
const ResearchEmployers = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [industry, setIndustry] = useState('')
    const [field, setField] = useState('name')
    const [order, setOrder] = useState('ASC')
    const [sort, setSort] = useState('Low')

    const industries =useQuery(FETCH_EMPLOYER_INDUSTRY)
    const unique = industries.data?.getEmployerIndustry?.filter((obj, index) => {
      return index === industries.data?.getEmployerIndustry.findIndex(o => obj.industry === o.industry);
      });
    const [getEmployers, { loading, error, data }] = useLazyQuery(SEARCH_EMPLOYERS,{ variables: {
          "employerSearchFilter":{
          "name":name,  
          "location": location,
          "industry": industry
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
    const items=data?.searchEmployers
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
    <div className='research-employers'>
    <div className="research-employers-box">
        <div className="title">
            <h1>Figure out what employers want</h1>
            <p>When talking to employers about jobs, you need to show them you understand their business. You also need to explain how your skills and experience make you a good fit for their business.</p>
        </div>
       <div className="search-bar">
        <div className="company">
        <h2>Company</h2>
        <div className="input-box">
            <FiSearch size={26} className='icons'/>
            <input type="text" id='title' 
            placeholder='Company name  ' 
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
        <div className="industry">
        <h2>Industry</h2>
        <div className="input-box">
          <FiTag size={26} className='icons'/>
          <select id="type"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="Company Industry">Company Industry</option>
            {unique?.map((option) => (
            <option key={option.id} 
            value={option.industry}>{option.industry}</option>
            ))}
            </select> 
        </div>
        </div>
        <div className="search-btn">
            <button 
             onClick={getEmployers}
            >Find Employers</button>
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
              <div className="research-employers-result">
              <div className="research-employers-result-title">
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
            <div className="research-employers-result-bottom">
            {loading && <Spinner />}
                {error && <p>Something Went Wrong</p>}
                {currentItems.map((employer)=>(
                    <EmployerCard employer={employer} key ={employer.id} />
                ))}
            </div>
            </div>
      ): (<></>)}
      </div>
  )
}

export default ResearchEmployers