import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import Pagination from '../Pagination/Pagination'
import './character.css'
import { Link } from 'react-router-dom'

const Character = () => {
  const [activePage, setActivePage] = useState(1)
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [species, setSpecies] = useState("")

  let api = `https://rickandmortyapi.com/api/character/?page=${activePage}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  const { info, results } = data

  useEffect(() => {
    (async () => {
      const data = await fetch(api).then((res) => res.json())
      setData(data)
    })()
  }, [api])
  return (
    <>
      <h2 className="mb-5 text-center text-white">Character</h2>
      <div className="d-flex align-items-baseline">
        <Search setSearch={setSearch} setActivePage={setActivePage} />
        <Filter setStatus={setStatus} setGender={setGender} setActivePage={setActivePage} setSearch={setSearch} setSpecies={setSpecies} />
      </div>
      <ul className="card-list">
        {results?.length ? (
          results.map((item, index) => (
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
          <h3>Not Found </h3>
        )}
      </ul>
      <Pagination
        setActivePage={setActivePage}
        activePage={activePage}
        totalPage={info?.pages}
      />
    </>
  )
}

export default Character
