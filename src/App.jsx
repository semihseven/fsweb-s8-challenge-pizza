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
  Link
} from "react-router-dom";
import OrderFormTest from './components/OrderFormTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-start items-center w-screen h-screen'
    >
      <Header />

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/neworder">
            <OrderForm />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>

        </Switch>
      </Router>



    </div>
  )
}

export default App
