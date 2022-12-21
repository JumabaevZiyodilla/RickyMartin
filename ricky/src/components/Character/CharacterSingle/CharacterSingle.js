import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCard } from '../../Card/Card'

const CharacterSingle = () => {
  const [data, setData] = useState("")
  const { name } = useParams()
  let api = `https://rickandmortyapi.com/api/character/?${name}`
  
  const {info, results} = data;
  useEffect(() => {
      ;(async () => {
          const data = await fetch(api).then((res) => res.json())
          setData(data)
        })()
    }, [api])
    console.log(results)
    console.log(api);
  return (
    <>
      <section>
        <div className="container">
          {results?.map((item,index) => (
            <SingleCard
            key={index}
            image={item.image}
            name={item.name}
            status={item.status}
            species={item.species}
            location={item.location.name}
            origin={item.origin.name}
          />
          ))}
        </div>
      </section>
    </>
  )
}

export default CharacterSingle
