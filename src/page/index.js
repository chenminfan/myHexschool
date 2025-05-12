import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PageIndex() {
  return (
    <div>
      <header className='d-flex justify-content-center py-2'>
        <h3>小專案</h3>
      </header>
      <main className='frontend'>
        <Outlet context={{}} />
      </main>
    </div>
  )
}
