import React from 'react'
import Header from '../components/header'

function Layout({children}) {
  return (
  <React.Fragment>
    <Header/>
    <main>
        {children}
    </main>
    <footer>App by Tabrez Hakimji </footer>
  </React.Fragment>
  )
}

export default Layout