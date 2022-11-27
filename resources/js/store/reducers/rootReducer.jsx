import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import cartReducer from "./cartReducer";
import notiReducer from "./notiReducer";
import bookReducer from "./bookReducer";
import bookTitleReducer from "./bookTitleReducer";
import promotionReducer from "./promotionReducer";
import publisherReducer from "./publisherReducer";
import authReducer from "./authReducer";
import roleReducer from "./roleReducer";
import userReducer from "./userReducer";
import authorReducer from "./authorReducer";
const rootReducer = combineReducers({
  category: categoryReducer,
  cart: cartReducer,
  noti: notiReducer,
  book: bookReducer,
  bookTitle: bookTitleReducer,
  promotion: promotionReducer,
  publisher: publisherReducer,
  auth: authReducer,
  role: roleReducer,
  user: userReducer,
  author: authorReducer
})
export default rootReducer;
