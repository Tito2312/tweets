import React from 'react'
import { Links } from '../Links/Links'


export const Options = () => {
  return (<div className='options'>
      <div className = "divLinks"><Links content = "Home" refLink='/'></Links></div>
      <div className = "divLinks"><Links content = "UseState" refLink='/UseState'></Links></div>
      <div className = "divLinks"><Links content = "UseCustom" refLink='/Use2'></Links></div>
      <div className = "divLinks"><Links content = "UseEffect" refLink='/UseEffect'></Links></div>
      <div className = "divLinks"><Links content = "Tweets" refLink='/Tweets'></Links></div>
      <div className = "divLinks"><Links content = "Rick And Morty"></Links></div>
  </div>
  )
}
