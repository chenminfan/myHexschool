import React from 'react'

const Select = (props) => {
  const { children, handleSelect, selectState, optionDefault = '無商品', } = props

  return (
    <select className="form-select form-select-sm" value={selectState === 0 ? 0 : selectState} onChange={handleSelect}>
      {selectState === 0 && <option disabled={selectState !== 0} value=''>{optionDefault}</option>}
      {children}
    </select>
  )
}
export default Select