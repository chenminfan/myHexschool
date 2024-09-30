import React, { useCallback, useMemo, useState } from 'react'
import ListGroup from '../ListGroup';
import ListGroupItem from '../ListGroup/ListGroupItem';

const Cart = (props) => {
  const { cartData, setAdd, setProdQty, prodQty } = props

  const handleDelCart = useCallback((e) => {
    setAdd([cartData.filter(item => item.id !== e.target.value)])
  }, [cartData])
  const [sum, setSum] = useState(0)
  const checkTotal = useMemo(() => {
    return prodQty.map((prod) => prod.price * prod.prodQty)
      .reduce((a, b) => a + b, 0)
  }, [prodQty])

  console.log(checkTotal)
  if (cartData.length > 0)
    return (
      <ListGroup checkoutPrice={checkTotal}>
        {cartData.map((item, index) => {
          return (
            <ListGroupItem key={`${item.id}_${index}`} handleClick={handleDelCart} item={item} setProdQty={setProdQty} prodQty={prodQty} />
          )
        })}
      </ListGroup>
    )
}
export default Cart;