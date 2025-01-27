import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { MdArrowBackIosNew } from "react-icons/md";


function Notfound() {
  return (
    <div className='user-not-found'>
    <RxCrossCircled size={30}/>
    <h3 className='user-not-found-title'>User not found, Try Again</h3>  
    <Link className='user-not-found-navLink' to={"/"}> <MdArrowBackIosNew size={30} />Try Again From Homepage</Link>
    </div>
  )
}

export default Notfound