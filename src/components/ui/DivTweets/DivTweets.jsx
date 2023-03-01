import React,{useState, useRef, useEffect} from 'react'
import { Buttons } from '../Buttons/Buttons'
import { SubTittle } from '../SubTittle/SubTittle'
import { Ul } from '../Ul/Ul'


export const DivTweets = () => {
  const arrData = []
  let newArr = [] 

    const tweet = useRef('')
    const [text, setText] = useState('')
    const [cant, setCant] = useState(255)
    const [file, setFile] = useState('')

    // localStorage.setItem("tweet",JSON.stringify([""]))
    
    useEffect(() =>{
      let tweets = JSON.parse(localStorage.getItem('tweet'))
      tweets.map((element)=>{
        arrData.push(element)
      })
    },[text])

    const postTweet = () =>{
        let newText = tweet.current.value
        setText(newText)
        tweet.current.value = ""
        setCant(255)
    }

    const reduceCant = () =>{
      let count = tweet.current.value
      setCant(255-count.length)
    }

    const fileTweet = () =>{

      arrData.push(text)
      localStorage.setItem('tweet', JSON.stringify(arrData))
    }
    
    function getData(){
      newArr.push(JSON.parse(localStorage.getItem("tweet")))
      setFile(newArr)
    }

  return (
    <div className='divTweets'>
      <div className='tweets'>
      <SubTittle content='Publica tu Tweet'/>
         <hr />
         <textarea ref={tweet} placeholder='Escribe un tweet (max 255 caracteres)' name="" id="" cols="30" rows="10" maxLength={255} onKeyUp={reduceCant}></textarea>
         <div className='div-btns'>
          <Buttons props="btns-tweets" content="Publicar" fun={postTweet}/>
          <Buttons props="btns-tweets" content="Archivar" fun={fileTweet}/>
          <Buttons props="btns-tweets" content="Mostrar Archivados" fun={getData}/>
        </div>

        <SubTittle content={cant}/>
        <SubTittle content={text}/>
        
      </div>
      <SubTittle content='Aqui se verán tus tweets archivados'/>
        <div>
          <Ul></Ul>
        </div>
    </div>
  )
}
