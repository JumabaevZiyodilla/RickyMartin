import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../Card/Card'
import './episode.css'
import Select from './Select/Select'

const Episode = () => {
  const [activePage, setActivePage] = useState(1)
  const [data, setData] = useState([])
  const [episodeText, setEpisodeText] = useState({ air: '', episode: '' })
  const [results, setResults] = useState([])

  let episodeApi = `https://rickandmortyapi.com/api/episode/${activePage}`

  useEffect(() => {
    ;(async () => {
      const data = await fetch(episodeApi).then((res) => res.json())
      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json())
        }),
      )
      setResults(a)
      const allData = []
      data.characters.forEach((characterLink) => {
        fetch(characterLink)
          .then((res) => res.json())
          .then((singleCharacter) => {
            allData.push(singleCharacter)

            if (allData.length === data.characters.length) {
              setData(allData)
              setEpisodeText({ air: data.air_date, episode: data.episode })
            }
          })
      })
    })()
  }, [episodeApi])
  console.log(results)
  return (
    <>
      <section className="episode">
        <div className="container">
          <h2 className="mb-5 text-center text-white fs-1">Episode</h2>
          <p className="text-white text-center fs-2">{episodeText.episode}</p>
          <p className="text-white text-center fs-3">{episodeText.air}</p>
          <Select setActivePage={setActivePage} name="Episode-" total={51} />
          <ul className="card-list">
            {data?.length ? (
              data.map((item, index) => (
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

        </div>
      </section>
    </>
  )
}

export default Episode
