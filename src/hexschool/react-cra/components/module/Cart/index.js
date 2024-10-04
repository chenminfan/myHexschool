
import { useContext } from 'react'
import ListGroup from '../../ListGroup';
import ListGroupItem from '../../ListGroup/ListGroupItem';
import CartProd from '../CartProd';
import { ShoppingContent } from '../ShoppingCart/ShoppingContent'


const Cart = () => {
  const [state] = useContext(ShoppingContent);

  return (
    <ListGroup cx="cart">
      {state.cartList.length > 0 ? (
        <>
          {/*{JSON.stringify(state.cartList)} */}
          {state.cartList.map((item, index) => {
            return (
              <ListGroupItem key={`${item.id}_${index}`} item={item} >
                <CartProd item={item} />
              </ListGroupItem>
            )
          })}
          <ListGroupItem>
            <strong>Total NT$ {state.checkTotal || 0}</strong>
          </ListGroupItem></>
      ) : (
        <ListGroupItem>
          <span className="px-2"><i className="bi bi-cart"></i></span>
          您還未加入購買的商品
        </ListGroupItem>)
      }
    </ListGroup>
  )
}
export default Cart;