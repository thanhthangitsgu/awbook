import React from 'react'
import './app.jsx'
import Header from './layouts/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './layouts/Footer.jsx'
import AuForm from './components/AuForm.jsx'
import { useState } from 'react'
export default function App() {
  const [showAuForm, setshowAuForm] = useState(false);
  const handleShowAuForm = () =>{
    setshowAuForm(true);
  }
  const handleCloseAuForm = () =>{
    //alert("check");
    setshowAuForm(false);
  }
  return (
    <>
      <AuForm setshowAuForm = {handleShowAuForm} showAuForm = {showAuForm} handleCloseAuForm = {handleCloseAuForm} ></AuForm>
      <Header handleShowAuForm = {handleShowAuForm} ></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>

  )
}
