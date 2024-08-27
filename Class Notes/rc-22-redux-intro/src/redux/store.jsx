
import {combineReducers, legacy_createStore as createStore } from "redux";
import todoReducer from "./reducers/todoReducer"
import counterReducer from "./reducers/counterReducer"



const topluReducer = combineReducers({
    counterReducer:counterReducer,
    todoReducer:todoReducer
})




export const store = createStore(topluReducer)