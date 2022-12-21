import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Card } from '../Card/Card';

const Episode = () => {

  const [activePage, setActivePage] = useState(1);
  const [data, setData] = useState([]);

  let episodeApi = `https://rickandmortyapi.com/api/episode/${activePage}`;

  useEffect(()=>{
    console.log(data);
  },[data]);

  useEffect(() => {
    (async () => {
      const res = fetch("https://rickandmortyapi.com/api/episode").then(res => res.json()).then(datas => {
        console.log(datas);

      });
      const data = await fetch(episodeApi).then((res) => res.json());
      const allData = [];
      data.characters.forEach(characterLink => {
        fetch(characterLink).then(res => res.json()).then(singleCharacter => {
          allData.push(singleCharacter);
          if(allData.length === data.characters.length){
            setData(allData);
          }
        })
      });
      
    })()
  },[episodeApi])

  // results.characters.forEach(element => console.log(element))
  return (
    <>
      <h2 className='mb-5 text-center text-white'>Episode</h2>
      <div>
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
    </>
  )
}

export default Episode
