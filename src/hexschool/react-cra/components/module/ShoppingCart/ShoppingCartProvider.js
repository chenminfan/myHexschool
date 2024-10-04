import React, { useReducer } from 'react'
import { ShoppingContent, cartReducer, cartInit } from './ShoppingContent'

const ShoppingCartProvider = ({ children }) => {
  const reducer = useReducer(cartReducer, cartInit)
  return (
    <ShoppingContent.Provider value={reducer}>
      {children}
    </ShoppingContent.Provider>
  )
}

export default ShoppingCartProvider
