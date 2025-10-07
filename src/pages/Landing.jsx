import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ORANGE_BG =
  'bg-[radial-gradient(ellipse_at_center,rgba(255,200,80,0.5)_0%,rgba(255,140,0,0.35)_25%,rgba(120,60,0,0.5)_70%,rgba(60,30,0,0.85)_100%)]'

const VALID_CODE = '213.213.50cc5152d7e'

export default function Landing() {
  const [codeInput, setCodeInput] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function onValidate() {
    const code = codeInput.trim()
    if (code === VALID_CODE) {
      setError('')
      // pode usar com '=' que iremos redirecionar no CatchAll
      navigate(`/CodigoValidacao=${code}`)
    } else {
      setError('Código inválido. Confira e tente novamente.')
    }
  }

  return (
    <div className={`min-h-screen ${ORANGE_BG} relative overflow-hidden`}>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute left-1/2 top-24 -translate-x-1/2 h-96 w-96 rounded-full blur-3xl opacity-40 bg-yellow-300' />
        <div className='absolute right-16 bottom-24 h-64 w-64 rounded-full blur-2xl opacity-30 bg-amber-400' />
      </div>

      <div className='container mx-auto px-2 py-10'>
        <div className='mx-auto mt-8 w-full max-w-xl rounded-2xl bg-neutral-800/70 p-6 text-neutral-100 shadow-2xl ring-1 ring-black/30 backdrop-blur-md'>
          <div className='mx-auto mb-4 w-40 text-center text-2xl font-extrabold tracking-widest'>
            DIP<span className='text-neutral-400'>LO</span>MAX
          </div>

          <div className='space-y-3'>
            <label className='block text-sm'>Cód. Validação:</label>
            <input
              className='w-full rounded border border-neutral-600 bg-neutral-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400'
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              placeholder=''
              onKeyDown={(e) => { if (e.key === 'Enter') onValidate() }}
            />

            <div className='grid grid-cols-1 gap-3'>
              <div>
                <label className='block text-sm'>Nome:</label>
                <input className='w-full rounded border border-neutral-600 bg-neutral-900/50 px-3 py-2 text-sm opacity-60' disabled placeholder='—' />
              </div>
              <div>
                <label className='block text-sm'>CPF:</label>
                <input className='w-full rounded border border-neutral-600 bg-neutral-900/50 px-3 py-2 text-sm opacity-60' disabled placeholder='—' />
              </div>
            </div>

            {error && <div className='text-sm text-red-400'>{error}</div>}

            <button
              onClick={onValidate}
              className='mt-2 w-full rounded-lg bg-amber-500/90 px-4 py-2 text-sm font-semibold text-neutral-900 shadow hover:bg-amber-400'
            >
              Pesquisar Diploma Digital
            </button>

            <p className='mt-3 text-xs text-neutral-400'>
              Para fins no disposto no Art. 23 da Portaria MEC nº1095, de 25 de Outubro de 2018,
              esta Instituição de Ensino Superior informa a relação de diplomas registrados.
            </p>
          </div>
        </div>

        <div className='mx-auto mt-6 max-w-5xl text-xs text-neutral-300'>
          <div className='flex items-center justify-between'>
            <div className='font-mono tracking-wider'>DIPLOMAX</div>
            <span className='text-neutral-400'>
              Debarry – Inovação e Tecnologia 2024 © Todos os direitos reservados
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
