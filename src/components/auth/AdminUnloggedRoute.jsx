import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

export default function AdminUnloggedRoute({ children }) {
  const { auth } = useAuth()

  if (auth.token) {
    return <Navigate to='/admin/zoonosis' />
  }

  return children
}
