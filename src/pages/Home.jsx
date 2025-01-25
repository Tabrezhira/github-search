import React from 'react'
import SearchBar from '../components/searchbar/SearchBar'
import '../styles/Home.css'
function Home() {
  return (
  
    <div>
      <div className='home-content'>
        <div>
        <h4 className='home-title'>Search Any GitHub User</h4>
        </div>
        
        <SearchBar/>
      </div>
     
    </div>
  )
}

export default Home