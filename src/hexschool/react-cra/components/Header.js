import React from 'react';

const Header = (props) => {
  const { headerLink = '#', headerTitle, children, badgeCart } = props;
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-4 py-2">
        <div className="container-fluid">
          <a className="navbar-brand" href={headerLink}>{headerTitle}</a>
          {children}
          <button type="button" className="btn btn-outline-dark btn-sm position-relative">
            購物車
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {badgeCart > 99 ? '99+' : badgeCart}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </nav>
    </header>
  )
}
export default Header;