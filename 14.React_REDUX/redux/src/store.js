// npm i redux react-redux
import { createStore, applyMiddleware } from "redux";

// npm i redux-thunk
import thunk from "redux-thunk";
import rootReducer from "./redux/rootReducer";

// our store file contains only one reducer as argument
// for multiple reducers we need to combine reducers and pass
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;