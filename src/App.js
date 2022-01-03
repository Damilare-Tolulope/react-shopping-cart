import React from 'react'
import './App.css'
import Nav from './components/ui/Nav'
import Home from './components/Home'
import Shop from './components/Shop'
import Footer from './components/ui/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Nav sticky="top" />
      <Route exact  path='/' component={Home} />
      <Route  path='/shop' component={Shop} />
      <Footer />
    </Router>
  )
}

export default App
