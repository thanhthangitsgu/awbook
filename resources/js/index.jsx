import './bootstrap'
import '../css/app.scss'
import '../css/home.scss'
import '../css/header.scss'
import '../css/book.scss'
import '../css/admin.scss'
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Book from './pages/customer/Book'
import Home from './pages/customer/Home'
import DetailBook from './pages/customer/DetailBook'
import Customer from './main/Customer'
import Admin from './main/Admin'
import UserAdmin from '../js/pages/admin/user/UserAdmin'
import UserDetail from './pages/admin/user/UserDetail'
import Authentization from './Authentization'
if (document.getElementById('app')) {
  const root = createRoot(document.getElementById('app'))
  root.render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Customer />}>
              <Route path='book/*' element={<Book></Book>}></Route>
              <Route path='detail/:id' element={<DetailBook></DetailBook>}></Route>
              <Route index element={<Home></Home>}></Route>
            </Route>
            <Route path='/admin/*' element={<Authentization role = {1}> <Admin /></Authentization>}>
              <Route index element={<UserAdmin></UserAdmin>}></Route>
              <Route path='user/*' element={<UserAdmin></UserAdmin>}></Route>
              <Route path='user/:id' element={<UserDetail></UserDetail>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>,
  )
}
