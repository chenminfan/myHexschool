import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import ProdCard from './components/ProdCard';
import ListGroup from './components/ListGroup';
import ListGroupItem from './components/ListGroup/ListGroupItem';
import data from './data/dataCart.json';
import './assets/App.css';
import './assets/all.scss'

const ReactCraApp = () => {
  const [add, setAdd] = useState([]);
  const handleAddCart = useCallback((item) => {
    setAdd([...add, item])
  }, [add])
  const handleDelCart = useCallback((id) => {
    setAdd([add.filter(item => item.id !== id)])
  }, [add])
  const [qty, setQty] = useState(10)

  // const memoCheckout = useMemo(() => {
  //   return memoTotal * data;
  // }, [memoTotal])

  return (
    <>
      <Header headerTitle="react購物車" badgeCart={add.length}></Header>
      <main className="App">
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
            <div className="col col-lg-4">

              <ListGroup checkoutPrice="全部項目">
                {add.map((item, index) => {
                  return (
                    <ListGroupItem key={`${item.id}_${index}`} qty={qty} item={item} handleSDelProd={handleDelCart} />
                  )
                })}
              </ListGroup>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ReactCraApp;
