import React from 'react'
import ProdCard from '../../components/module/ProdCard';
import CartGroup from '../../components/module/CartGroup';
import { data } from '../../data/prodCart';


export default function Home() {
  return (
    <div className="container-fluid py-2">
      <div className='row'>
        <div className="col-lg-7 col-md-12 col-prodCard">
          <div className='d-flex flex-wrap justify-content-start'>
            <ProdCard prodData={data} />
          </div>
        </div>
        <div className="col-lg-5 col-md col-cart">
          {/* {state.cartList.length > 0 && }  */}
          <CartGroup />
        </div>
      </div>
      <div className="col-sm-5">


      </div>
    </div>
  )
}
