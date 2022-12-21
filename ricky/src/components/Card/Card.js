import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './card.css'

export const Card = ({ image, name, species, status, location, origin }) => {
  return (
    <li className="card-item">
      <img src={image} width="230" height="225" alt="" />
      <div className="card-info-box">
        <div>
          <h3 className="card-name">{name}</h3>
          <div className="d-flex align-items-center">
            {(function () {
              if (status === 'Alive') {
                return <span className="rounded-circle alive"></span>
              } else if (status === 'Dead') {
                return <span className="rounded-circle dead"></span>
              } else {
                return <span className="rounded-circle unknown"></span>
              }
            })()}
            <p className="card-alive">
              {status} - <span>{species}</span>
            </p>
          </div>
        </div>
        <div>
          <span className="card-last">Last known location:</span>
          <p className="card-last-location">{location}</p>
        </div>
        <div>
          <span className="card-first">First seen in:</span>
          <p className="card-first-name">{origin}</p>
        </div>
      </div>
    </li>
  )
}

export const SingleCard = ({
  image,
  name,
  species,
  status,
  location,
  origin,
}) => {

  const navigate = useNavigate()
  return (
    <li className="card-item">
      <img src={image} width="230" height="225" alt="" />
      <div className="card-info-box">
        <div>
          <h3 className="card-name">{name}</h3>
          <div className="d-flex align-items-center">
            {(function () {
              if (status === 'Alive') {
                return <span className="rounded-circle alive"></span>
              } else if (status === 'Dead') {
                return <span className="rounded-circle dead"></span>
              } else {
                return <span className="rounded-circle unknown"></span>
              }
            })()}
            <p className="card-alive">
              {status} - <span>{species}</span>
            </p>
          </div>
        </div>
        <div>
          <span className="card-last">Last known location:</span>
          <p className="card-last-location">{location}</p>
        </div>
        <div>
          <span className="card-first">First seen in:</span>
          <p className="card-first-name">{origin}</p>
        </div>
        <button className="card-back" onClick={()=> navigate(-1)}>
          Back
        </button>
      </div>
    </li>
  )
}
