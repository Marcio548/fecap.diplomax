import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import NotFound from './NotFound.jsx'

export default function CatchAll() {
  const { pathname } = useLocation()
  // exemplo: /CodigoValidacao=213.213.50cc5152d7e
  const matchEq = pathname.match(/^\/CodigoValidacao=(.+)$/)
  if (matchEq) {
    const code = decodeURIComponent(matchEq[1])
    return <Navigate to={`/CodigoValidacao/${code}`} replace />
  }
  return <NotFound />
}
