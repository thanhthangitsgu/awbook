import React, { useCallback } from 'react'
import Header from '../layouts/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../layouts/Footer.jsx'
import AuForm from '../components/form/AuForm.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import allAPI from '../store/api/allAPI.jsx'
import modalActions from "../store/actions/modalActions"
import AuthForm from '../components/form/AuthForm.jsx'
import { useNavigate } from 'react-router-dom'
import axiosClient from '../store/api/axiousClient.jsx'
export default function Customer() {
  const dispatch = useDispatch();
  const [showAuForm, setshowAuForm] = useState(false);
  const navigate = useNavigate()
  const handleShowAuForm = () => {
    setshowAuForm(true);
  }


  useEffect(() => {
    dispatch(allAPI.authAPI.getProfile());
  }, []);


  return (
    <>
      <AuthForm>  </AuthForm>
      {/* <AuForm setshowAuForm={handleShowAuForm} showAuForm={showAuForm} handleCloseAuForm={handleCloseAuForm} ></AuForm> */}
      <Header handleShowAuForm={handleShowAuForm} ></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>

  )
}
