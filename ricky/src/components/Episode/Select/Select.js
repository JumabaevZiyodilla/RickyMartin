import React from 'react'
import "./select.css"

const Select = ({ total, name, setActivePage }) => {
  return (
    <select className='select-episode' onChange={(evt) => setActivePage(evt.target.value)}>
      <option disabled selected>Choose Episode</option>
      {[...Array(total).keys()].map((item) => {
        return <option value={item + 1}>{name}{item + 1}</option>
      })}
    </select>
  )
}

export default Select
