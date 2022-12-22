import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../Card/Card'
import './location.css'
import Select from '../Episode/Select/Select'

const Location = () => {
  const [activePage, setActivePage] = useState(1)
  const [info, setInfo] = useState([])
  const {name, type, dimension} = info;
  const [results, setResults] = useState([])

  let episodeApi = `https://rickandmortyapi.com/api/location/${activePage}`

  useEffect(() => {
    ;(async () => {
      const data = await fetch(episodeApi).then((res) => res.json())
      setInfo(data)

      let a = await Promise.all(
        data.residents.map((item) => {
          return fetch(item).then((res) => res.json())
        }),
      )
      setInfo(a)
    })()
  }, [activePage])

  return (
    <>
      <section className="episode">
        <div className="container">
          <h2 className="mb-5 text-center text-white fs-1">Location</h2>
          <p className="text-white text-center fs-2">{name === "" ? "unknown" : name}</p>
          <p className="text-white text-center fs-3">{dimension === "" ? "unknown" : dimension}</p>
          <Select setActivePage={setActivePage} name="Episode-" total={126} />
          <ul className="card-list">
            {info?.length ? (
              info.map((item, index) => (
                <Link key={index} to={`/name=${item.name}`}>
                  <Card
                    key={index}
                    image={item.image}
                    name={item.name}
                    status={item.status}
                    species={item.species}
                    location={item.location.name}
                    origin={item.origin.name}
                  />
                </Link>
              ))
            ) : (
              <h3 className='text-white'>Not Found </h3>
            )}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Location
