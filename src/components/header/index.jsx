import React from 'react'
import "../../styles/Header.css"
import { useDispatch, useSelector } from 'react-redux'
import {themeActions} from '../../store/theme-slice'


function Header() {
  const themeState = useSelector((state)=> state.theme)
  const dispatch = useDispatch()
  const handleThemChange = () => {
    dispatch(themeActions.toggleTheme())
  }
  return (
    <section className='header-container'>
      <h2 className='title'>SearchGitHub</h2>
      <button className='switch-theme' onClick={handleThemChange}>Switch 🌓</button>
    </section>
  )
}

export default Header