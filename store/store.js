import { createStore } from 'redux';
import { combineReducers } from 'redux';

const item = (state = {title: ""}, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}
const rootReducer = combineReducers(item);
let store = createStore(rootReducer);

export default store; 