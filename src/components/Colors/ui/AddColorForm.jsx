import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {addColor} from '../../../store/actions'
import { push } from 'connected-react-router'

// class AddColorForm extends Component {

//     state = {
        
//     }

//     submit = (e) => {
//         e.preventDefault()
//         const {_title, _color} = this.refs
        
//         this.props.onNewColor(_title.value, _color.value)
        
//         _title.value = ''
//         _color.value = "#000000"
//         _title.focus()
//     }

//     render() {
//         return (
//             <form onSubmit={this.submit}>
//                 <input type="text" ref="_title" placeholder="some color" required />
//                 <input type="color" ref="_color" required/>
//                 <button>ADD</button>
//             </form>
//         )
//     }

//     componentDidMount() {
//         console.log(this)
//     }
// }

const AddColorForm = (props, {store}) => {
    let _title, _color;
    let {newColor} = props
    let submit = (e) => {
        e.preventDefault()
        // addColor(_title.value, _color.value)
        newColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }

    return (
        <form onSubmit={props.routeExample}>
            <input type="text" ref={input => {_title = input}} onFocus={props.focused} placeholder="some color" required></input>
            <input type="color" ref={input => _color = input} required/>
            <button>ADD</button>
        </form>
    )
}

AddColorForm.propTypes = {
    store: PropTypes.object
}

AddColorForm.contextTypes = {
    store: PropTypes.object
}

export default AddColorForm