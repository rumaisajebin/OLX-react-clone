import React from 'react'
import { UserAuth } from '../../store/FirebaseContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const { user } = UserAuth()

    if (!user) {
        return <Navigate to='/signin' />
    } else {
      return children
    }
}

export default ProtectedRoute