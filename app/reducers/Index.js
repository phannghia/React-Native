import  {combineReducers}from 'redux'
import counterReducer from './CounterReducer'

const  allReducres=combineReducers({
    counterReducer
});
export  default allReducres;