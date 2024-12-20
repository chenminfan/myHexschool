import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PageIndex() {
  return (
    <div>
      <header className='d-flex justify-content-center py-2'>
        <h3>專案練習</h3>
      </header>
      <main className='frontend'>
        <Outlet context={{}} />
      </main>
    </div>
  )
}
