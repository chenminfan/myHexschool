import React from 'react'

const ListGroupItem = (props) => {
  const { children } = props;

  return (
    <li className="list-group-item listGroupCart-item d-flex align-items-center">
      {children}
    </li >
  )
}

export default ListGroupItem;