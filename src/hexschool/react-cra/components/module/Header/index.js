import React, { useContext } from 'react';
import { ShoppingContent } from '../ShoppingCart/ShoppingContent'

const Header = (props) => {
  const [state] = useContext(ShoppingContent);
  const { headerLink = '#', headerTitle, children } = props;
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href={headerLink}>{headerTitle}</a>
          {children}
          <div className="btn btn-outline-dark btn-sm position-relative">
            <i className="bi bi-cart-check-fill"></i>
            <span className="cart-check-number position-absolute translate-middle badge rounded-pill bg-danger">
              {state.cartList.length > 0 && (<>{state.cartList.length > 99 ? '99+' : state.cartList.length}</>)}
              <span className={state.cartList.length === 0 ? '' : "visually-hidden"}>請加入商品</span>
            </span>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header;