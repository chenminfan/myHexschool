import React, { useState, useMemo, useCallback } from 'react'
import Select from '../Select'
import Option from '../Select/Option'

const ListGroupItem = (props) => {
  const { item, handleClick, setProdQty, prodQty } = props;
  const [select, setSelect] = useState('')
  const [qty, setQty] = useState(10)
  const memoTotal = useMemo(() => {
    return item.price * select;
  }, [select])
  const handleSelect = useCallback((e) => {
    setSelect(e.target.value)
    setProdQty([...prodQty, {
      ...item, prodQty: e.target.value
    }])
  }, [item])

  return (
    <li className="list-group-item listGroupCart-item d-flex align-items-center">
      <button type="button" className="btn-close btn-xs" onClick={(e) => handleClick(item.id)}></button>
      <div className='listGroupCart-box d-flex align-items-center flex-nowrap px-2'>
        <div className='listGroupCart-img rounded'><img src={item.img} alt={item.title} /></div>
        <div className='listGroupCart-text d-flex flex-column align-items-start flex-grow-1 px-2'>
          <span className='listGroupCart-title'>{item.title}</span>
          <span className='listGroupCart-price'>NT$ {item.price}</span>
        </div>
        <Select selectState={select} handleSelect={handleSelect}>
          {[...Array(qty)].map((value, index) => {
            return (
              <Option key={`${item.id}_${index + 1}`} optionText={index + 1} />
            )
          })}
        </Select>
        {memoTotal > 0 && <div className='listGroupCart-total px-2'>NT$ {memoTotal}</div>}
      </div>
    </li>
  )
}

export default ListGroupItem;