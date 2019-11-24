import React, {Component} from 'react';
import '../../App.css';
import "../../index.css"
import PropTypes from 'prop-types'
import {NewColor, Colors} from './colorApp'

const App = (props) => {
    
    console.log(props)
    
    return (
        <div className="app">
            <NewColor />
            <Colors />
        </div>
    )
}



export default App