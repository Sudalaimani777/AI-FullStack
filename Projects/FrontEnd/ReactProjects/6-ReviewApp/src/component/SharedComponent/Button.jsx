import React from 'react'

const Button = ({children, type, isDisabled, version}) => {
  return (
    <>
        <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
            {children}
        </button>
    </>
  )
}

export default Button