import { useState } from 'react'
import './App.css'
import { Footer } from './components/footer/Footer'
//import { Header } from './components/header/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Patata</h1>
     <Footer/>
    </>
  )
}

export default App
