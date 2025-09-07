import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'


import Header from './components/Header'
import OrderForm from './components/OrderForm'
import Home from './components/Home'
import Success from './components/Success'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-start items-center w-screen h-screen'
    >
      <Header />
      <Success />



    </div>
  )
}

export default App
