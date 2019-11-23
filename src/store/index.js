import {createStore, combineReducers} from 'redux'
import {colors, sort} from './reducers'
import initialState from '../data/Colors.json'


const store = createStore(combineReducers({colors, sort}), initialState)

console.log(store.getState())