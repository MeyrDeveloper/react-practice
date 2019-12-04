import {createBrowserHistory} from 'history'
import { connectRouter } from 'connected-react-router'
import {compose, createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router'
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
    return result
}

export const history = createBrowserHistory(
    {
        basename: 'some',
        anotherProp: 1
    }
)

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
                                                    applyMiddleware(logger, saver, someMiddle, routerMiddleware(history))
                                                )
                                            )
                                        )
}

export default storeFactory