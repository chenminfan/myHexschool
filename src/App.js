import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ReactCraApp from './hexschool/react-cra/src/App';
import ReactDailyApp from './hexschool/react-daily/App';



export default function App() {
  return (
    <Routes>
      <Route path='/' element={<ReactCraApp />}>
      </Route>
      {/* 暫放 */}
      <Route path='/reactDaily' element={<ReactDailyApp />}></Route>
    </Routes>
  )
}