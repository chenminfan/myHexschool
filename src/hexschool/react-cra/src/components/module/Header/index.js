import React, { useContext } from 'react';
import { ShoppingContent } from '../ShoppingCart/ShoppingContent'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const [state] = useContext(ShoppingContent);
  const { headerLink = '/#', headerTitle } = props;
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href={headerLink}>{headerTitle}</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={({ isActive }) => {
                  console.log(isActive)
                  return `nav-link ${isActive ? 'newActive' : 'isActive'}`
                }} to="/cart">購物車</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/album">相簿</NavLink>
              </li>
            </ul>
          </div>

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