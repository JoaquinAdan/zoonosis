import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

export default function AdminProtectedRoute({ children }) {
  const { auth, logout } = useAuth()
  
  if (!auth.token) {
    return <Navigate to='/admin' />
  }

  return children
}
