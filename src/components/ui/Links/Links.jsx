import React from 'react'
import { Link } from 'react-router-dom'

export const Links = ({content, refLink}) => {
  return (
        <Link className='links' to={refLink}>{content}</Link>
  )
}
