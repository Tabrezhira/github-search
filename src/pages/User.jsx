import React from 'react'
import '../styles/User.css'
import UserProfile from '../components/user-profile/UserProfile'


import Notfound from '../components/notfound/Notfound'
import { useSelector } from 'react-redux'
 
function User() {
  const user = useSelector((state) => state.githubUser.user)
  console.log(user)
  return (
    <section className='container'>
      {user ? (<UserProfile avatar_url={user.avatar_url} followers={user.followers} html_url={user.html_url} name={user.name || user.login} public_repos={user.public_repos} key={user.id}/>) : (<Notfound/>)}
    </section>
  )
}

export default User