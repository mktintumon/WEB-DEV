import { combineReducers } from "redux";
import ballreducer from './Reducers/ballReducer'
import batReducer from './Reducers/batReducer'

// combining multiple reducers/data
const rootReducer = combineReducers({
    Ball : ballreducer,
    Bat : batReducer
})

export default rootReducer