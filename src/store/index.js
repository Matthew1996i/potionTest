import { createStore } from 'redux'

const INITIAL_STATE = {
    count: 0,
    item: {},
}

function reducer(state = INITIAL_STATE, action){
    switch(action.type) {
        case 'ADD_CART_VALUE':
            return {
               ...state, 
               count: state.count + 1
            }
        case 'READ_ITEM':
            return {
                ...state,
                item: {...action.item}
            }
        default:
            return state   
    }
}

const store = createStore(reducer)

export default store