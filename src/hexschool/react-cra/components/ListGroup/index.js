import React from 'react';

const ListGroup = (props) => {
  const { children, checkoutPrice } = props
  return (
    <ul className="list-group list-group-flush listGroupCart rounded">
      {children}
      {<li className="list-group-item d-flex justify-content-end">
        <strong>總金額 NT$ {checkoutPrice}</strong>
      </li>}
    </ul>
  )
}
export default ListGroup;