
import React,{useEffect,useState} from "react";
import axios from "axios";
import './pagination.css';
const Pagination=()=> {
	const [page, setPage]=useState(2);
		const [rowcount, setRowcount]=useState(1);
		const handlePrev=()=>{
			if(page==1){
				return page
			}
			setPage(page-1)
		}
		const handleNext=()=>{
			setPage(page+1)
		}

		useEffect(()=>{
			async function pagination(){
			const res=await axios.get(`http://localhost:5002/product/pageProduct?row_count=2&page_number=2`)
			console.log(res.data);
			}
			pagination();
		},[]);
  return (
  <div className="pages">
	  <span onClick={handlePrev}>Previous</span>
	  {/* <span>1 of pages</span> */}
	  <span onClick={handleNext}>next</span>
	  <br/>
<input type="number" id='rowcount' />
<label htmlFor="rowcount">No of rows</label>
  </div>);
}

export default Pagination;
