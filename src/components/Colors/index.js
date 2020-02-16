import React, {Component} from 'react';
import '../../App.css';
import "../../index.css"
import PropTypes from 'prop-types'
import {NewColor, Colors} from './colorApp.jsx'
import ColorDetails from './ColorDetails.js'
import {Route, Switch} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'


const App = (props) => {
    return (

            <div className="app">
                <Switch>
                    <Route exact path="/:id" component={ColorDetails} />
                    {/* <Route path="/comps" component={Colors}/>
                    <Route exact path="/colors/color" component={Colors} /> */}
                </Switch>
            </div>
    )
}



export default App