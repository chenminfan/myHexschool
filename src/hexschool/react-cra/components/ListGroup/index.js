import React from 'react';

const ListGroup = (props) => {
  const { children, checkoutPrice } = props
  return (
    <ul className="list-group list-group-flush">
      {children}
      <li className="list-group-item d-flex justify-content-end">
        總金額 NT$ {checkoutPrice}
      </li>
    </ul>
  )
}
export default ListGroup;