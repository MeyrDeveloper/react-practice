import {createBrowserHistory} from 'history'
import { connectRouter } from 'connected-react-router'
import {compose, createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router'
import colors from './reducers/colors'
import sort from './reducers/sort'
import data from '../data/Colors'
import { push } from "connected-react-router";
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
    if(action.type === "API") {
        store.dispatch(push('/comps'))
    }
    return next(action)
}

const serverLogger = store => next => action => {
    console.log('dispatching server action')
    console.log(action)
    console.log('\n')
    return next(action)
}

const middleware = server => {
    console.log('middleware')
    console.log(server)
    return server ? serverLogger : logger
}


export const history = createBrowserHistory()

// let reducers = combineReducers({colors, sort, history})

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    colors,
    sort
})

// const storeFactory = (initialState = []) => 
//     applyMiddleware(logger, saver)(createStore)(combineReducers({colors, sort}), initialState)
const storeFactory = (initialState = data) => {
    // console.log(localStorage['redux-store'])
    return createStore(createRootReducer(history), (localStorage['redux-store']) 
                        ? JSON.parse(localStorage['redux-store']) 
                            : initialState, compose(
                                                composeWithDevTools(
                                                    applyMiddleware(routerMiddleware(history), someMiddle)
                                                )
                                            )
                                        )
}

// server store

const storeFactoryServer = (server = false, initialState={}) => {
    return applyMiddleware(middleware)(createStore)(combineReducers({colors}), initialState)
}
export default storeFactory