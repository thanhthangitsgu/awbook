import React from 'react'
import './app.jsx'
import Home from './pages/Home'
import Header from './layouts/Header.jsx'
import Book from './pages/Book.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Discount from './pages/Discount'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/book">
            <Book></Book>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/discount">
            <Discount></Discount>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App
