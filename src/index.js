import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Colors'
import Countries from './components/Countries'
import data from './data/Colors'
import storeFactory, {history} from './store'
import {Provider} from 'react-redux'
import App from './App'
import {BrowserRouter} from 'react-router-dom'


// console.log(data)
const store = storeFactory()

const render = () => {
    return ReactDOM.render(
        <Provider store={store}>
            <Application history={history}/>
        </Provider>, document.getElementById('root'))
}

// store.subscribe(render)

render()

// ReactDOM.render( <App />, document.getElementById('root'))

