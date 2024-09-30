import React from 'react'

const Select = (props) => {
  const { children, handleSelect, selectState = '' } = props
  return (
    <select className="form-select form-select-sm" value={selectState} onChange={handleSelect}>
      <option disabled={selectState.length !== 0} value=''>0</option>
      {children}
    </select>
  )
}
export default Select