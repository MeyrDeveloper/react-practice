import React from 'react'
import {render} from 'react-dom'
import CountDownDispatcher from './dispatcher'
import Actions from './actionCreator'
import Store from './store'

const appDispatcher = new CountDownDispatcher()
const actions = new Actions(appDispatcher)
const store = new Store(10, appDispatcher)


const Countdown = ({count, tick, reset}) => {
    if (count) {
        setTimeout(() => tick(), 1000)
    }
    return (count) ?
        <h1>{count}</h1> :
        <div onClick={() => reset(10)}>
            <span>CELEBRATE!!!</span>
            <span>(click to start over)</span>
        </div>
}

const render = count => render(
    <Countdown count={10} {...actions} />,
    
)