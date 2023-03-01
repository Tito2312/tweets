import React,{useRef} from 'react'
import { Input } from '../Input/Input'



export const DivEffect = () => {

  // const [color, setColor] = UseState('')
  const color = useRef('')

  const handleColor = (event) =>{
    color.current.style.backgroundColor = event.target.value
  }

  return (
    <div className='divEffect'>
      <div ref={color} className='change-color'>
      </div>
      <Input type='color' change={handleColor}/>
    </div>
  )
}
