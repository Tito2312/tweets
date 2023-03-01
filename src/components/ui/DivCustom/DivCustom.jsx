import React, { useState, useRef } from 'react'
import { Buttons } from '../Buttons/Buttons'
import { Input } from '../Input/Input'


export const DivCustom = () => {

    let txt = useRef()
    const [text, setText] = useState('')
    const getData = () =>{
        console.log(txt.current.value)
        setText(txt.current.value)
    } 
  return (
    <div>
        <p>{text}</p>
        <div>
            <Input type='text' placeholder='ingrese el texto' ref={txt}/>
            <Buttons props='btn-submit' content='enviar' fun={getData}/>
        </div>
    </div>
  )
}
