import React from 'react'

const Select = (props) => {
  const { children, handleSelect, selectState = '' } = props
  return (
    <select className="form-select" value={selectState} onChange={handleSelect}>
      <option disabled={selectState.length !== 0} value={selectState}>請選擇數量</option>
      {children}
    </select>
  )
}
export default Select