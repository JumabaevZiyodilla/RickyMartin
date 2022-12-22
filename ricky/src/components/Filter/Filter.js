import React from 'react'
import './filter.css'

const Filter = ({
  setStatus,
  setGender,
  setActivePage,
  setSearch,
  setSpecies,
}) => {
  const statusData = ['alive', 'dead', 'unknown']
  const genderData = ['male', 'female', 'genderless', 'unknown']
  const speciesData = [
    'Species',
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'unknown',
    'Disease',
    'Cronenberg',
    'Animal',
    'Robot',
    'Planet',
  ]

  const clear = () => {
    setStatus('')
    setGender('')
    setActivePage(1)
    setSearch('')
    setSpecies('')
  }

  return (
    <>
      <div className="filter-wrap">
        <h3 className="filter-title text-center">Filter</h3>
        <p onClick={clear} className="filter-clear">
          Clear All
        </p>
        <div className="select-box">
          <select
            className="select-data"
            onChange={(evt) => setStatus(evt.target.value)}
          >
            {statusData.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <select
            className="select-gender"
            onChange={(evt) => setGender(evt.target.value)}
          >
            {genderData.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <select
            className="select-species"
            onChange={(evt) => setSpecies(evt.target.value)}
          >
            {speciesData.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
            
          </select>
        </div>
      </div>
    </>
  )
}
export default Filter
