//initial state
let initialState = {
    balls : 10
}

// My reducer function
function ballReducer(state =  initialState , action){
    switch(action.type){
        case 'increment':
            return {
                balls : state.balls + 1
            }
        case 'decrement':
            return{
                balls : state.balls - 1
            }    
        default :
            return state;    
    }
}

export default ballReducer;