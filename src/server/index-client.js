import React from 'react'
import ReactDOM from 'react-dom'
import Menu from '../components/Recipes/Menu.jsx'

window.React = React

alert('bundled file, rendering in browser')

console.log( document.getElementById("react-container"))

ReactDOM.hydrate(<Menu recipes={__DATA__} />, document.getElementById("react-container"))

alert("render complete")