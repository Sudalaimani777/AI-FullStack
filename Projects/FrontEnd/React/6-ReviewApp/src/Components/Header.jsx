import React, { useContext } from 'react'

import ThemeContext from '../Context/ThemeContext'
import { Link } from 'react-router-dom';

const Header = ({ title = "Review App" }) => {

  const { toggle, handleToggle } = useContext(ThemeContext);
  // console.log(toggle, handleToggle);

  return (
    <header>
      <div className="header-inner">
        <h1 className="header-title">{title}</h1>
        <div className="header-actions">
          <nav className="header-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </nav>
          <button
            onClick={handleToggle}
            className={`toggle-btn ${toggle ? "light" : "dark"}`}
          >
            {toggle ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
