import React from 'react'
import { useGithobUser } from '../context'

function User() {
  const {user} = useGithobUser()
  console.log(user)
  return (
    <div>User</div>
  )
}

export default User