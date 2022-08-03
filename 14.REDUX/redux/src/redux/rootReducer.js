import { combineReducers } from "redux";
import ballreducer from './Reducers/ballReducer'
import batReducer from './Reducers/batReducer'
import userReducer from './Reducers/users/userReducer'

// combining multiple reducers/data
const rootReducer = combineReducers({
    Ball : ballreducer,
    Bat : batReducer,
    User : userReducer
})

export default rootReducer