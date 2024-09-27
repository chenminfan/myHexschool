import React, { useState, useMemo } from 'react'
import Select from '../Select'
import Option from '../Select/Option'

const ListGroupItem = (props) => {
  const { qty, item, handleSDelProd } = props;
  const [select, setSelect] = useState('')
  const memoTotal = useMemo(() => {
    return item.price * select;
  }, [select])
  const handleSelect = (e) => {
    setSelect(e.target.value)
  }
  console.log(item)
  return (
    <li className="list-group-item listGroupCart d-flex align-items-center">
      <button type="button" className="btn-close" onClick={(e) => handleSDelProd(item)}></button>
      <div className='listGroupCart-box d-flex align-items-center flex-nowrap px-2'>
        <div className='listGroupCart-img rounded'><img src={item.img} alt={item.title} /></div>
        <div className='listGroupCart-text d-flex flex-column align-items-start flex-grow-1 px-2'>
          <span className='listGroupCart-title'>{item.title}</span>
          <span className='listGroupCart-price'>NT$ {item.price}</span>
        </div>
        <Select selectState={select} handleSelect={(e) => handleSelect(item.id)}>
          {[...Array(qty)].map((value, index) => {
            return (
              <Option key={`number_${index}`} optionText={index} />
            )
          })}
        </Select>
        {memoTotal > 0 && <div className='listGroupCart-total'>NT$ {memoTotal}</div>}
      </div>
    </li>
  )
}

export default ListGroupItem;