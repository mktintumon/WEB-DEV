import {createStore} from 'redux'
import rootReducer from './redux/rootReducer'

// our store file contains only one reducer as argument
// for multiple reducers we need to combine reducers and pass
const store = createStore(rootReducer)
export default store