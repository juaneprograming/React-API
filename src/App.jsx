import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  //nos va a permitir hacer la peticion http
  useEffect(() =>{
    fetch ("")
  }, [])

  return (
    <>
      <div className='App'>
        <h1>Fetch like a Pro</h1>
        <div className='card'></div>
      </div>
    </>
  )
}

export default App
