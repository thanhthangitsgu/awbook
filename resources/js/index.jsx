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
import BookDetail from "./pages/admin/book/BookDetail"
import BookTitle from './pages/admin/book/BookTitle'
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
            <Route path='/admin/*' element={<Admin />}>
              <Route index element={<UserAdmin></UserAdmin>}></Route>
              <Route path='nguoi-dung/' element={<UserAdmin></UserAdmin>}>
                <Route path=':id' element={<UserDetail action="view"></UserDetail>}></Route>
                <Route path='add/' element={<UserDetail action="add"></UserDetail>}></Route>
              </Route>
              <Route path='dau-sach/' element={<BookTitle></BookTitle>}>
                <Route path=':id' element={<BookDetail action="view"></BookDetail>}></Route>
                <Route path='add/' element={<BookDetail action="add"></BookDetail>}></Route>
              </Route>
              
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>,
  )
}
