import {createStore, combineReducers, applyMiddleware} from 'redux'
import colors from './reducers/colors'
import sort from './reducers/sort'

// console.log(reducers)
const logger = store => next => action => {
    let result
    console.groupCollapsed('dispatch', action.type)
    console.log(store)
    console.log(next)
    console.log(action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
} 

const saver = store => next => action => {
    let result = next(action)
    console.log(store)
    return result
}

let reducers = combineReducers({colors, sort})

const storeFactory = (initialState = []) => 
    applyMiddleware(logger, saver)(createStore)(combineReducers({colors, sort}), initialState)

// const storeFactory = (initialState) => 
//     createStore(reducers, initialState, applyMiddleware(logger, saver))

export default storeFactory