import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center text-neutral-200'>
      <div className='text-center'>
        <h1 className='text-2xl mb-2'>Página não encontrada</h1>
        <p className='mb-4'>Verifique o endereço digitado.</p>
        <Link className='underline' to='/'>Voltar para o início</Link>
      </div>
    </div>
  )
}
