import { Routes, Route } from 'react-router-dom';
import Header from './components/module/Header';
import ShoppingCartProvider from './components/module/ShoppingCart/ShoppingCartProvider';
import { Cart, Album, AlbumIndex, AlbumPhoto, AlbumSearch, Home, NotFund, } from './page'

import './assets/App.css';
import './assets/all.scss'

const App = () => {
  return (
    <ShoppingCartProvider>
      <Header headerTitle="react cart" >
      </Header>
      <main className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/album' element={<Album />}>
            <Route index element={<AlbumIndex />} />
            <Route path="search" element={<AlbumSearch />} />
            <Route path="photo/:id" element={<AlbumPhoto />} />
          </Route>
          <Route path='*' element={<NotFund />}></Route>
        </Routes>
      </main >
    </ShoppingCartProvider >
  );
}

export default App;