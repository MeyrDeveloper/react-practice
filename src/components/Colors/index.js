import React, {Component} from 'react';
import '../../App.css';
import "../../index.css"
import PropTypes from 'prop-types'
import {NewColor, Colors} from './colorApp'
import ColorDetails from './ColorDetails'
import {Route, Switch, BrowserRouter} from 'react-router-dom'


const App = (props) => {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/" component={ColorDetails} />
                <Route path="/comps" component={
                    (props) => {
                        console.log(props)
                        return (
                                <div>
                                    asdasdasdsad
                                    <BrowserRouter>
                                        <Route path="/" component={Colors} />
                                        <Route path="/colors" component={Colors} />
                                    </BrowserRouter>
                                </div>
                            )
                    }    
                } />
                <Route exact path="/colors/color" component={Colors} />
            </Switch>
        </div>
    )
}



export default App