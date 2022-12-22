import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"

const Header = () => {
  return (
    <header className="py-3 site-header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="text-white">The Rick and Morty</h1>
          <nav>
            <ul className="d-flex justify-content-between align-items-center m-0 gap-5">
              <li>
                <NavLink 
                  className={({ isActive }) =>
                    isActive
                      ? 'navlink active' 
                      : 'navlink'
                  }
                  to="/"
                >
                  Character
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'navlink active'
                      : 'navlink'
                  }
                  to="/episode"
                >
                  Episeode
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'navlink active'
                      : 'navlink'
                  }
                  to="/location"
                >
                  Location
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
