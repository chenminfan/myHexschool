import React, { useState } from 'react'
import ShoppingContent from './ShoppingContent'

const ShoppingCartProvider = ({ children }) => {

  return (
    <ShoppingContent.Provider value={{}}>
      {children}
    </ShoppingContent.Provider>
  )
}

export default ShoppingCartProvider
