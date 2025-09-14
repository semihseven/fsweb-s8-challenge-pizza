import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'



import Header from './components/Header'
import OrderForm from './components/OrderForm'
import Home from './components/Home'
import Success from './components/Success'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";



const initialForm = {
  isim: "",
  not: "",
  malzemeler: [],
  boyut: "",
  kalınlık: ""
}

const initialFiyat = {
  yemekFiyat: 0,
  ekMalzeme: 0,
}



function App() {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState(initialForm);
  const [fiyat, setFiyat] = useState(initialFiyat);
  const [yanit, setYanit] = useState({});


  return (
    <div className='flex flex-col justify-start items-center w-screen h-screen'>


      <Router>
        <Header />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/neworder">
            <OrderForm count={count} setCount={setCount} formData={formData} setFormData={setFormData} fiyat={fiyat} setFiyat={setFiyat} yanit={yanit} setYanit={setYanit} />
          </Route>
          <Route path="/success">
            <Success formData={formData} fiyat={fiyat} yanit={yanit} />
          </Route>

        </Switch>
      </Router>



    </div>
  )
}

export default App
