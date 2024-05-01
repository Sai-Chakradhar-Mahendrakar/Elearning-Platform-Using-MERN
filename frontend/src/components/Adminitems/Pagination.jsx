import { Button } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({totalCount, handlePageChange, current_page}) => {
  return new Array(totalCount).fill(0).map((el,i)=>{
    return <Button key={i}  onClick={()=>handlePageChange(i+1)}
    style={{margin:"12px",padding:"10px",border:"none",borderRadius:"50px",width:"40px",backgroundColor: current_page === i + 1 ? "grey" : null, cursor:"pointer"}} 
    >{i+1}</Button>
  })
}

export default Pagination
