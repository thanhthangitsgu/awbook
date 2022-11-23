import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const initState = {
}

const store = createStore(
    rootReducer, applyMiddleware(thunk)
)
export default store