import React from 'react'
import ReactDOM from 'react-dom'
import Menu from '../components/Colors'

window.React = React

alert('bundled file, rendering in browser')

console.log( document.getElementById("react"))

ReactDOM.hydrate(<Menu recipes={__INITIAL_STATE__} />, document.getElementById("react"))

alert("render complete")