import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const initState = {

}

const store = createStore(
    rootReducer,
)
export default store