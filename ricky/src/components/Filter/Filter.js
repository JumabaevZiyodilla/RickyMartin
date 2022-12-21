import React from 'react'
import './filter.css'
import FilterBtn from '../FilterBTN/FilterBtn'

const Filter = ({ setStatus, setGender, setActivePage, setSearch,setSpecies }) => {
  const statusData = ['alive', 'dead', 'unknown']
  const genderData = ['male', 'female', 'genderless','unknown']
  const speciesData = ["Species", "Human", "Alien", "Humanoid", "Poopybutthole", "Mythological", "unknown", "Disease", "Cronenberg", "Animal", "Robot", "Planet"];

  const clear = () => {setStatus(""); setGender(""); setActivePage(1); setSearch("")};

  return (
    <>
      <div className="filter-wrap">
        <h3 className="filter-title">Filter</h3>
        <p onClick={clear} className="filter-clear">Clear All</p>

        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Filter by status
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                {statusData.map((item, index) => (
                  <FilterBtn
                    setStatus={setStatus}
                    text={item}
                    name="status"
                    index={index}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Filter by species
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                  {speciesData.map((item, index) => (
                    <FilterBtn
                      setStatus={setSpecies}
                      text={item}
                      name="species"
                      index={index}
                      key={index}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Filter by gender
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                {genderData.map((item, index) => (
                  <FilterBtn
                    setStatus={setGender}
                    text={item}
                    name="gender"
                    index={index}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter
