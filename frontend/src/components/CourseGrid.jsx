import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import CourseCard from './CourseCard';
import PropTypes from 'prop-types';
const CourseGrid = ({items}) => {
    const skills= items[0].subject
    const [sort, setSort] = useState('Title: A-Z')
    let arrayForSort= [...items]
    
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage=6
    useEffect(() => {
        if(sort==='Title: A-Z'){
            arrayForSort.sort((a, b) => {
            const nameA = a.title.toUpperCase(); 
            const nameB = b.title.toUpperCase(); 
            if (nameA < nameB) 
            return -1;
            if (nameA > nameB) 
            return 1;
        return 0;
        });
         } else {
            arrayForSort.sort((a, b) => {
            const nameA = a.title.toUpperCase(); 
            const nameB = b.title.toUpperCase(); 
            if (nameA < nameB) 
            return 1;
            if (nameA > nameB) 
            return -1;
        return 0;
        });
         }
         }, [sort])
              
    useEffect(() => {
        if(arrayForSort){
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(arrayForSort.slice(itemOffset, endOffset) );
        setPageCount(Math.ceil(arrayForSort.length / itemsPerPage));  
        }
    }, [itemOffset,itemsPerPage,sort])
          
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length
        setItemOffset(newOffset);
    };
  return (
    <div className='course-grid'>
      {currentItems.length>0 ? (
         <div className="course-grid-box">
      <div className="course-grid-title">
        <h1>{skills} Course</h1>
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
    <div className="course-grid-title-bottom">

        {currentItems.map((course)=>(
            <CourseCard course={course} key ={course.id} />
        ))}
    </div>
    </div>
    ):(<></>)}
    </div>
  )
}
CourseGrid.propTypes = {
    items: PropTypes.array
  }
export default CourseGrid
