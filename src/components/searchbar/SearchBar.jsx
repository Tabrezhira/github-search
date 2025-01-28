import React, { useRef, useTransition } from 'react'
import'../../styles/Searchbar.css'
import { RiSearchFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUserById } from '../../store/users-slice';

function SearchBar() {
  const navigate = useNavigate()
 const [isPending, startTransition] = useTransition()
 const dispatch = useDispatch()
  const inputRef = useRef(null);
  const handleUserSearch = () => {
    console.log(inputRef.current.value)
    navigate(`/user/${inputRef.current.value}`)
    startTransition(() => {
      dispatch(fetchUserById(inputRef.current.value))
    })

  }

  return (
    <div className='searchbar-container'>
      <input  ref={inputRef} className='search-input' type="text" />
      <RiSearchFill  size={20} className='search-icon' onClick={handleUserSearch}/>
    </div>
  )
}

export default SearchBar