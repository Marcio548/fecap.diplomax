import React from 'react'
import { useParams } from 'react-router-dom'

const DIPLOMA = {
  status: 'ATIVO',
  nome: 'Marco Vasconcelos Ferroni',
  curso: 'Graduação em Ciências Econômicas (45365)',
  cpf: '441.686.968-12!',
  idDiploma: '108508',
  emissora: 'Centro Universitário Álvares Penteado (213)',
  registradora: 'Centro Universitário Álvares Penteado (213)',
  nExpedicao: '165',
  nRegistro: '165',
  ingresso: '26/05/2018',
  conclusao: '25/06/2022',
  expedicao: '23/08/2022',
  registro: '23/08/2022',
  publicacaoDOU: '—',
}

export default function Details() {
  const { code } = useParams()
  const shownCode = code || ''

  return (
    <div className='min-h-screen bg-[radial-gradient(ellipse_at_center,rgba(255,200,80,0.5)_0%,rgba(255,140,0,0.35)_25%,rgba(120,60,0,0.5)_70%,rgba(60,30,0,0.85)_100%)]'>
      <div className='container mx-auto px-2 py-10'>
        <div className='mx-auto max-w-5xl rounded-xl bg-neutral-900/40 shadow-2xl ring-1 ring-black/30 backdrop-blur-md'>
          <div className='flex items-center justify-between rounded-t-xl bg-neutral-800 px-4 py-2 text-sm text-neutral-100'>
            <span className='font-semibold'>Diplomas Ativos</span>
            <button className='rounded bg-neutral-700 px-2 py-0.5 text-xs hover:bg-neutral-600'>✕</button>
          </div>

          <div className='border-b border-neutral-700 px-4 py-3 text-neutral-100'>
            <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
              <div className='text-sm'>
                <span className='mr-2'>Diplomas localizados:</span>
                <select className='rounded border border-neutral-600 bg-neutral-800 px-2 py-1 text-xs'>
                  <option>[ATIVO] {DIPLOMA.nome} - {DIPLOMA.cpf} - {DIPLOMA.curso}</option>
                </select>
              </div>
              <div className='flex items-center gap-2'>
                <input
                  className='w-64 rounded border border-neutral-600 bg-neutral-800 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-400 outline-none'
                  defaultValue={shownCode}
                />
                <button className='rounded-lg bg-amber-500/90 px-4 py-2 text-sm font-semibold text-neutral-900 shadow hover:bg-amber-400'>
                  Validar
                </button>
                <button className='rounded-lg bg-neutral-700 px-3 py-2 text-sm text-neutral-100 hover:bg-neutral-600'>
                  Limpar
                </button>
              </div>
            </div>
            <div className='mt-2 text-xs text-neutral-400'>
              Código esperado (para testes): <code className='select-all rounded bg-neutral-800 px-1 py-0.5 text-amber-300'>{shownCode}</code>
            </div>
          </div>

          <div className='px-4 py-3 text-neutral-100'>
            <h3 className='mb-2 text-sm font-semibold'>Dados do Diploma</h3>

            <div className='space-y-5 text-sm'>
              <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-12 md:col-span-6'>
                  <div className='text-neutral-400'>Graduação</div>
                  <div className='font-medium'>{DIPLOMA.curso}</div>
                </div>
                <div className='col-span-6 md:col-span-3'>
                  <div className='text-neutral-400'>Nome</div>
                  <div className='font-medium'>{DIPLOMA.nome}</div>
                </div>
                <div className='col-span-6 md:col-span-3'>
                  <div className='text-neutral-400'>Status</div>
                  <div className='font-medium'>{DIPLOMA.status}</div>
                </div>
              </div>

              <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-12 md:col-span-6'>
                  <div className='text-neutral-400'>Código Validação</div>
                  <div className='font-medium'>{shownCode}</div>
                </div>
                <div className='col-span-12 md:col-span-6'>
                  <div className='text-neutral-400'>CPF</div>
                  <div className='font-medium'>{DIPLOMA.cpf}</div>
                </div>
              </div>

              <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-12 md:col-span-6'>
                  <div className='text-neutral-400'>Emissora</div>
                  <div className='font-medium'>{DIPLOMA.emissora}</div>
                </div>
                <div className='col-span-12 md:col-span-6'>
                  <div className='text-neutral-400'>Registradora</div>
                  <div className='font-medium'>{DIPLOMA.registradora}</div>
                </div>
              </div>

              <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-6 md:col-span-3'>
                  <div className='text-neutral-400'>Nº Expedição</div>
                  <div className='font-medium'>{DIPLOMA.nExpedicao}</div>
                </div>
                <div className='col-span-6 md:col-span-3'>
                  <div className='text-neutral-400'>Nº Registro</div>
                  <div className='font-medium'>{DIPLOMA.nRegistro}</div>
                </div>
                <div className='col-span-6 md:col-span-3'>
                  <div className='text-neutral-400'>Publicação DOU</div>
                  <div className='font-medium'>{DIPLOMA.publicacaoDOU}</div>
                </div>
                <div className='col-span-6 md:col-span-3'>
                  <div className='text-neutral-400'>ID Diploma</div>
                  <div className='font-medium'>{DIPLOMA.idDiploma}</div>
                </div>
              </div>

              <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-6 md:col-span-3'>
                  <div className='text-neutral-400'>Ingresso</div>
                  <div className='font-medium'>{DIPLOMA.ingresso}</div>
                </div>
                <div className='col-span-6 md:col-span-3'>
                  <div className='text-neutral-400'>Conclusão</div>
                  <div className='font-medium'>{DIPLOMA.conclusao}</div>
                </div>
                <div className='col-span-6 md:col-span-3'>
                  <div className='text-neutral-400'>Expedição</div>
                  <div className='font-medium'>{DIPLOMA.expedicao}</div>
                </div>
                <div className='col-span-6 md:col-span-3'>
                  <div className='text-neutral-400'>Registro</div>
                  <div className='font-medium'>{DIPLOMA.registro}</div>
                </div>
              </div>
            </div>
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
