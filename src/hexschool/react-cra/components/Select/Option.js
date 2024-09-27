import React from 'react'

const Option = (props) => {
  const { optionText = '' } = props;
  return (
    <option value={optionText}>{optionText}</option>
  )
}
export default Option