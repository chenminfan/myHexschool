import React, { useContext } from 'react';

const ProdCard = (props) => {
  const { item, handleChange, prodCardButton } = props;
  return (
    <div className="card cardProd">
      <div className="card-img-top">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="card-body">
        <div className='flex'>
          <h5 className="h6 card-title d-flex justify-content-between">
            <span><strong>{item.title}</strong></span>
            <span>NT$ {item.price}</span>
          </h5>
        </div>
        <div className='d-grid'>
          <button type='button' className="btn btn-primary btn-sm" onClick={(e) => handleChange(item)}> {prodCardButton}</button>
        </div>
      </div>
    </div >
  )
}
export default ProdCard;