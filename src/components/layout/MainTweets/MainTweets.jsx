import React from 'react'
import { DivTweets } from '../../ui/DivTweets/DivTweets'
import { Tittle } from '../../ui/Tittle/Tittle'



export const MainTweets = () => {
  return (
    <main className='Main'>
        <Tittle content='Generador de Tweets'/>
        <DivTweets/>
        
        
    </main>
  )
}
