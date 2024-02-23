import React, { useEffect, useState } from 'react'
import JobCard from './JobCard'
import { useLocation } from "react-router-dom";
import {useQuery} from '@apollo/react-hooks';
import {SEARCH_JOBS} from '../graphql/jobQueries'
import Spinner from './Spinner';
import ReactPaginate from 'react-paginate';
const JobSearchResult = () => {
    const { state } = useLocation();
    const [field, setField] = useState('title')
    const [order, setOrder] = useState('ASC')
    const [sort, setSort] = useState('Latest')

    const { loading, error, data} =useQuery(SEARCH_JOBS, 
        { variables: {
            "jobSearchFilter":{
                "title":state.title,  
                "location": state.location,
                "type": state.type
            },
            "sortBy":{"field":field,"order":order}
        }
    })
    const items=data?.searchJobs
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

    useEffect(() => {
   if(sort==='Latest'){
    setField("createdDate")
    setOrder("DESC")
    } else if(sort==='Oldest'){
    setField("createdDate")
    setOrder("ASC")
    } else if(sort==='Title: A-Z'){
    setField("title")
    setOrder("ASC")
    } else {
    setField("title")
    setOrder("DESC")
    }
    }, [sort])
  return (
    <div className="jobsearch-result">
         <div className="jobsearch-result-box">
         <div className="jobsearch-result-title">
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
              <option value="Latest">Latest</option>
              <option value="Oldest">Oldest</option>
              <option value="Title: A-Z">Title: A-Z</option>
              <option value="Title: Z-A">Title: Z-A</option>
         </select>
         </label>
         </div>
     </div>
     <div className="jobsearch-result-bottom">
        {loading && <Spinner />}
        {error && <p>Something Went Wrong</p>}
        {currentItems?.map((job)=>(
            <JobCard job={job} key ={job.id} />
        ))}
     </div>
        
         </div>
   </div>
     
  )
}

export default JobSearchResult