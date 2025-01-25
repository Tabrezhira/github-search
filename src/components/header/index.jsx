import React from 'react'
import "../../styles/Header.css"
import {useTheme} from'../../context/index'

function Header() {
  const theme = useTheme()
  const handleThemChange = () => {
    theme.toggleTheme()
  }
  return (
    <section className='header-container'>
      <h2 className='title'>SearchGitHub</h2>
      <button className='switch-theme' onClick={handleThemChange}>Switch 🌓</button>
    </section>
  )
}

export default Header