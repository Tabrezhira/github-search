import React, { useRef, useTransition } from 'react'
import'../../styles/Searchbar.css'
import { RiSearchFill } from "react-icons/ri";
import { useGithobUser } from '../../context';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const navigate = useNavigate()
 const [isPending, startTransition] = useTransition()
  const {fetchUser, user} = useGithobUser()
  const inputRef = useRef(null);
  const handleUserSearch = () => {
    console.log(inputRef.current.value)
    navigate(`/user/${inputRef.current.value}`)
    startTransition(() => {
      fetchUser(inputRef.current.value)
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