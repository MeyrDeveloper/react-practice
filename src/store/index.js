import {createStore, combineReducers, applyMiddleware} from 'redux'
import colors from './reducers/colors'
import sort from './reducers/sort'
import data from '../data/Colors'

// console.log(reducers)
const logger = store => next => action => {
    let result
    result = next(action)
} 

const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}
const someMiddle = store => next => action => {
    let result = next(action)
    console.log(result)
    return result
}

let reducers = combineReducers({colors, sort})

// const storeFactory = (initialState = []) => 
//     applyMiddleware(logger, saver)(createStore)(combineReducers({colors, sort}), initialState)
const storeFactory = (initialState = data) => {
    console.log(initialState)
    // console.log(localStorage['redux-store'])
    return createStore(reducers, (localStorage['redux-store']) 
                        ? JSON.parse(localStorage['redux-store']) 
                            : initialState, applyMiddleware(logger, saver, someMiddle))
}

export default storeFactory