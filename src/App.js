import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [quote,setQuote] = useState("")
  const [author,setAuthor] = useState("") 
  const date = new Date().toISOString().slice(0,10)
  
  const generateQuote=() => {
    axios.get('https://api.quotable.io/random')
      .then((response) => {
        const result=response.data
        //console.log(response.data)
        setQuote(result.content)
        setAuthor(result.author)
      })
      .catch(err => err.message)
  }

  useEffect(() => {
    generateQuote()
  },[])

  return (
    <div className="App">
      <div className='quote'>
        <h4>{date}</h4>
        <h1>{quote}</h1>
        <p>---{author}</p>
        <button className='btn' onClick={generateQuote}>Next Quote</button>
      </div>
      
    </div>
  )
}

export default App
