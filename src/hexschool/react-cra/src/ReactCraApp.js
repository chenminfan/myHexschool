import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Cart, Album, AlbumIndex, AlbumPhoto, AlbumSearch, Home, NotFund, } from './page'
// import ReactDailyApp from './hexschool/react-daily/App';



export default function ReactCraApp() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/album' element={<Album />}>
          <Route index element={<AlbumIndex />} />
          <Route path="search" element={<AlbumSearch />} />
          <Route path="photo/:id" element={<AlbumPhoto />} />
        </Route>
        <Route path='/*' element={<NotFund />}></Route>
      </Route>
      {/* 暫放 */}
      {/* <Route path='/reactDaily' element={<ReactDailyApp />}></Route> */}
    </Routes>
  )
}
