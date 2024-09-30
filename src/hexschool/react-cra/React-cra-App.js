import React, { useState, useCallback, useContext } from 'react';
import Header from './components/Header';
import ShoppingCartProvider from './components/ShoppingCartProvider/ShoppingCartProvider';
import ShoppingContent from './components/ShoppingCartProvider/ShoppingContent'
import ProdCard from './components/ProdCard';

import Cart from './components/Cart';
import data from './data/prodCart';
import './assets/App.css';
import './assets/all.scss'


const ReactCraApp = () => {
  const [add, setAdd] = useState([]);
  const [prodQty, setProdQty] = useState([])
  const handleAddCart = useCallback((item) => {
    setAdd([...add, item])
  }, [add])
  console.log(add)
  return (
    <>
      <Header headerTitle="react購物車" badgeCart={add.length}></Header>
      <main className="App">
        <ShoppingCartProvider>
          <div className="container-fluid py-2">
            <div className='row'>
              <div className="col">
                <div className='d-flex flex-wrap justify-content-start'>
                  {data.map((prod) => {
                    return (
                      <ProdCard key={prod.id} item={prod} prodCardButton="加入購物車" handleChange={handleAddCart} />
                    )
                  })}
                </div>
              </div>
              <div className="col col-lg-5">
                <Cart cartData={add} setAdd={setAdd} prodQty={prodQty} setProdQty={setProdQty}></Cart>
              </div>
            </div>
          </div>
        </ShoppingCartProvider>

      </main>
    </>
  );
}

export default ReactCraApp;
