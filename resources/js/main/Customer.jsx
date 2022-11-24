import React from 'react'
import Header from '../layouts/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../layouts/Footer.jsx'
import AuForm from '../components/AuForm.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import allAPI from '../store/api/allAPI.jsx'
export default function Customer() {
  const dispatch = useDispatch();
  const current = useSelector(state => state.user);
  useEffect(() => {
    dispatch(allAPI.userAPI.getProfile())
  }, [])
  const [showAuForm, setshowAuForm] = useState(false);
  const handleShowAuForm = () => {
    setshowAuForm(true);
  }
  const handleCloseAuForm = () => {
    setshowAuForm(false);
  }
  return (
    <>
      <AuForm setshowAuForm={handleShowAuForm} showAuForm={showAuForm} handleCloseAuForm={handleCloseAuForm} ></AuForm>
      <Header handleShowAuForm={handleShowAuForm} ></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>

  )
}
