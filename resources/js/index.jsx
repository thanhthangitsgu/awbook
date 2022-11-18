import './bootstrap'
import '../css/app.scss'
import '../css/home.scss'
import '../css/header.scss'
import '../css/book.scss'
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Book from './pages/Book'
import Home from './pages/Home'
if (document.getElementById('app')) {
  const root = createRoot(document.getElementById('app'))
  root.render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path='book' element={<Book></Book>}></Route>
              <Route index element={<Home></Home>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>,
  )
}
