import React, { useContext } from 'react'

import ThemeContext from '../Context/ThemeContext'

const Header = ({ title = "Review App" }) => {

  const { toggle, handleToggle } = useContext(ThemeContext);
  console.log(toggle, handleToggle);

  return (
    <header>
      <div className="header-inner">
        <h1 className="header-title">{title}</h1>
        <button
          onClick={handleToggle}
          className={`toggle-btn ${toggle ? "light" : "dark"}`}
        >
          {toggle ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </header>
  )
}

export default Header