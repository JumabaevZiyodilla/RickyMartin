import { useState, useEffect } from 'react'
import './app.css'
import { Route, Routes } from 'react-router-dom'
import Character from './components/Character/Character'
import Episode from './components/Episode/Episode'
import Location from './components/Location/Location'
import Header from './components/Header/Header'
import CharacterSingle from './components/Character/CharacterSingle/CharacterSingle'

function App() {
  return (
    <>
      <Header />
      <div className="container py-5">
        <Routes>
          <Route path="/" element={<Character />} />
          <Route path="/:name" element={<CharacterSingle />}></Route>
          <Route path="/episode" element={<Episode />} />
          <Route path="location" element={<Location />} />
        </Routes>
      </div>
    </>
  )
}
export default App
