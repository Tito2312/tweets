import React, { useState } from 'react'
// import { Counter } from '../../ui/Counter/Counter'
import { Buttons } from '../../ui/Buttons/Buttons'

export const MainState = () => {

  const [Count, setCount] = useState(0)

  return (
    <main className="mainState">
        <h2 className="counter">{Count}</h2>
        <div className='div-btns'>
          <Buttons props="btns" content="-" fun={() => setCount(Count-1)} />
          <Buttons props="btns" content="reset" fun={() => setCount(0)}/>
          <Buttons props="btns" content="+" fun={() => setCount(Count+1)}/>
        </div>
    </main>
  )
}
