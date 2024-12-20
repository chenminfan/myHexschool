import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ReactCraApp from './hexschool/react-cra/src/App';
import ReactDailyApp from './hexschool/react-daily/App';
import PageIndex from './page';
import HtmlPageIndex from './page/HtmlPageIndex';



export default function App() {
  return (
    <Routes>
      <Route element={<PageIndex />}>
        <Route path='/' element={<HtmlPageIndex />}></Route>
        <Route path='/reactCart' element={<ReactCraApp />}></Route>
      </Route>
      {/* <Route exact path="/js" render={() => { window.location.href = "./hexschool/js/index.html" }} /> */}

      {/* 暫放 */}
      <Route path='/reactDaily' element={<ReactDailyApp />}></Route>
    </Routes>
  )
}