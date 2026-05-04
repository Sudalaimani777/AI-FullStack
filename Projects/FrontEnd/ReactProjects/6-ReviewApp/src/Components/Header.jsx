import React from 'react'

const Header = ({ title = "Review App" }) => {
  return (
    <>
        <header>
            <h1>{title}</h1>
        </header>
    </>
  )
}

export default Header