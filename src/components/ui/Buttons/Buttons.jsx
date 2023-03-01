import React from 'react'

export const Buttons = ({props, content,fun}) => {
  return (
    <button onClick={fun} className={props}>{content}</button>
  )
}
