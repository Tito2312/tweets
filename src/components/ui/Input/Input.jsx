import React from 'react'

export const Input = ({change, type}) => {
  return (
    <input type={type} onChange={change}></input>
  )
}
