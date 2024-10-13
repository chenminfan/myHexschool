import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ReactCraApp from './hexschool/react-cra/App';
import { Cart, Album, AlbumIndex, AlbumPhoto, AlbumSearch, Home, NotFund, } from './hexschool/react-cra/page'
import ReactDailyApp from './hexschool/react-daily/App';



export default function App() {
  return (
    <Routes>
      <Route path='/reactCra' element={<ReactCraApp />}>
        <Route path='/reactCra/' element={<Home />}></Route>
        <Route path='/reactCra/cart' element={<Cart />}></Route>
        <Route path='/reactCra/album' element={<Album />}>
          <Route index element={<AlbumIndex />} />
          <Route path="search" element={<AlbumSearch />} />
          <Route path="photo/:id" element={<AlbumPhoto />} />
        </Route>
        <Route path='/reactCra*' element={<NotFund />}></Route>
      </Route>
      <Route path='/reactDaily' element={<ReactDailyApp />}></Route>
    </Routes>
  )
}
