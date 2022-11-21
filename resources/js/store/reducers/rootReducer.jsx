import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import cartReducer from "./cartReducer";
import notiReducer from "./notiReducer";
import bookReducer from "./bookReducer";
import bookTitleReducer from "./bookTitleReducer";
import promotionReducer from "./promotionReducer";
import publisherReducer from "./publisherReducer";
import authReducer from "./authReducer";
const rootReducer = combineReducers({
  category: categoryReducer,
  cart: cartReducer,
  noti: notiReducer,
  book: bookReducer,
  bookTitle: bookTitleReducer,
  promotion: promotionReducer,
  publisher: publisherReducer,
  auth: authReducer,
})
export default rootReducer;
