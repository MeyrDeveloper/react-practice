import React, {Component} from 'react';
import '../../App.css';
import "../../index.css"
import PropTypes from 'prop-types'
import {NewColor, Colors} from './colorApp'
import ColorDetails from './ColorDetails'
import {Route, Switch} from 'react-router-dom'


const App = (props) => {
    
    
    return (
        <div className="app">
            <Switch>
                <Route exact path="/:id" component={ColorDetails} />
                <Route path="/" component={(props) => (
                    <div>
                        <NewColor />
                        <Colors />
                    </div>
                )} />
                <Route exact path="/colors/color" component={Colors} />
            </Switch>
        </div>
    )
}



export default App