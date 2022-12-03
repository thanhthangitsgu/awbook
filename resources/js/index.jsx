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
import BookPageCustomer from './pages/customer/book/index'
import Home from './pages/customer/Home'
import DetailBook from './pages/customer/DetailBook'
import Customer from './main/Customer'
import Admin from './main/Admin'
import UserDetail from './pages/admin/user/detail'
import BookDetail from "./pages/admin/bookTitle/BookDetail"
import BookTitle from './pages/admin/bookTitle/'
import Author from './pages/admin/author/Author'
import AuthorDetail from './pages/admin/author/AuthorDetail'
import CategoryPage from "./pages/admin/category/"
import CategoryDetail from "./pages/admin/category/detail"
import Publisher from './pages/admin/publisher'
import PublisherDetail from './pages/admin/publisher/detail'
import Position from './pages/admin/position'
import PositionDetail from './pages/admin/position/detail'
import Promotion from './pages/admin/promotions/'
import PromotionDetail from "./pages/admin/promotions/detail"
import Partner from './pages/admin/partner'
import PartnerDetail from './pages/admin/partner/detail'
import Permission from './pages/admin/permission'
import PermissionDetail from './pages/admin/permission/detail'
import Bill from "./pages/admin/bill"
import Import from './pages/admin/import'
import BookAdmin from "./pages/admin/book/index";
import User from "./pages/admin/user"
if (document.getElementById('app')) {
  const root = createRoot(document.getElementById('app'))
  root.render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Customer />}>
              <Route path='book/*' element={<BookPageCustomer></BookPageCustomer>}></Route>
              <Route path='detail/:id' element={<DetailBook></DetailBook>}></Route>
              <Route index element={<Home></Home>}></Route>
            </Route>
            <Route path='/admin/*' element={<Admin />}>
              <Route index element={<User></User>}></Route>
              <Route path='nguoi-dung/' element={<User></User>}>
                <Route path=':id' element={<UserDetail action="view"></UserDetail>}></Route>
                <Route path='add/' element={<UserDetail action="add"></UserDetail>}></Route>
              </Route>
              <Route path='dau-sach/' element={<BookTitle></BookTitle>}>
                <Route path=':id' element={<BookDetail action="view"></BookDetail>}></Route>
                <Route path='add/' element={<BookDetail action="add"></BookDetail>}></Route>
              </Route>
              <Route path='tac-gia/' element={<Author></Author>}>
                <Route path=':id' element={<AuthorDetail action="view"></AuthorDetail>}></Route>
                <Route path='add/' element={<AuthorDetail action="add"></AuthorDetail>}></Route>
              </Route>
              <Route path='nha-xuat-ban/' element={<Publisher></Publisher>}>
                <Route path=':id' element={<PublisherDetail action="view"></PublisherDetail>}></Route>
                <Route path='add/' element={<PublisherDetail action="add"></PublisherDetail>}></Route>
              </Route>
              <Route path='the-loai/' element={<CategoryPage></CategoryPage>}>
                <Route path=':id' element={<CategoryDetail action="view"></CategoryDetail>}></Route>
                <Route path='add/' element={<CategoryDetail action="add"></CategoryDetail>}></Route>
              </Route>
              <Route path='chuc-vu/' element={<Position></Position>}>
                <Route path=':id' element={<PositionDetail action="view"></PositionDetail>}></Route>
                <Route path='add/' element={<PositionDetail action="add"></PositionDetail>}></Route>
              </Route>
              <Route path='khuyen-mai/' element={<Promotion></Promotion>}>
                <Route path=':id' element={<PromotionDetail action="view"></PromotionDetail>}></Route>
                <Route path='add/' element={<PromotionDetail action="add"></PromotionDetail>}></Route>
              </Route>
              <Route path='doi-tac/' element={<Partner></Partner>}>
                <Route path=':id' element={<PartnerDetail action="view"></PartnerDetail>}></Route>
                <Route path='add/' element={<PartnerDetail action="add"></PartnerDetail>}></Route>
              </Route>
              <Route path='quyen/' element={<Permission></Permission>}>
                <Route path=':id' element={<PermissionDetail action="view"></PermissionDetail>}></Route>
                <Route path='add/' element={<PermissionDetail action="add"></PermissionDetail>}></Route>
              </Route>
              <Route path='hoa-don/' element={<Bill></Bill>}>
              </Route>
              <Route path='phieu-nhap/' element={<Import></Import>}>
              </Route>
              <Route path='sach/' element={<BookAdmin></BookAdmin>}>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>,
  )
}
