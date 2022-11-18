import React from 'react'
import './app.jsx'
import Home from './pages/Home'
import Header from './layouts/Header.jsx'
import { BrowserRouter, Outlet } from 'react-router-dom'
import Footer from './layouts/Footer.jsx'

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </>

    )
  }
}
export default App
