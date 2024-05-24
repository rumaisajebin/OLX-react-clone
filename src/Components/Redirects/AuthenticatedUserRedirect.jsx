import React from 'react'
import { UserAuth } from '../../store/FirebaseContext'
import { Navigate } from 'react-router-dom'

const AuthenticatedUserRedirect = ({ children }) => {
  const { user } = UserAuth()

  if (!user) {
    return children
  } else {
    return <Navigate to='/' />
  }
}

export default AuthenticatedUserRedirect