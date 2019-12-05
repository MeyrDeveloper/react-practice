import React, {Component} from 'react';
import '../../App.css';
import "../../index.css"
import PropTypes from 'prop-types'
import {NewColor, Colors} from './colorApp'
import ColorDetails from './ColorDetails'
import {Route, Switch, BrowserRouter,useRouteMatch} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'


const App = (props) => {
    return (
        <ConnectedRouter history={props.history}>

            <div className="app">
                <Switch>
                    <Route exact path="/" component={ColorDetails} />
                    <Route path="/comps" component={Colors}/>
                    <Route exact path="/colors/color" component={Colors} />
                </Switch>
            </div>
        </ConnectedRouter>
    )
}



export default App