import { useState, useEffect } from 'react'
import './app.css'

function App() {
  const [data, setData] = useState({
    isLoading: true,
    data: [],
    isError: false,
  })

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      // .then(data => console.log(data.results.map(element => element.name)))
      .then((data) => {
        // console.log(data);
        setData({
          isLoading: false,
          data: data,
          isError: false,
        })
      })
      .catch((error) =>
        setData({
          isLoading: false,
          data: [],
          isError: true,
        }),
      )
  }, [])

  return (
    <>
      {data.isLoading && <h1>Loading...</h1>}
      {data.isError && <h1>Error...</h1>}
      {data.data && (
        <div className="card-wrap">
          <div className="container">
            <h1 className='card-title'>The Rick and Morty</h1>
            <ul className="card-list">
              {data.data.results?.map((element) => (
                <li className="card-item" key={element.id}>
                  <img src={element.image} width="230" height="225" alt="" />
                  <div className="card-info-box">
                    <div>
                      <h3 className="card-name">{element.name}</h3>
                      <p className="card-alive">
                        {element.status} - <span>{element.species}</span>
                      </p>
                    </div>
                    <div>
                      <span className="card-last">Last known location:</span>
                      <p className="card-last-location">
                        {element.location.name}
                      </p>
                    </div>
                    <div>
                      <span className="card-first">First seen in:</span>
                      <p className="card-first-name">{element.origin.name}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <p>Text</p>
    </>
  )
}

export default App
