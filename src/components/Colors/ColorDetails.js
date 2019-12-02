import React from 'react'
import { connect } from 'react-redux'
import { findById } from '../../services/finder'

const ColorDetails = (props) => {
    console.log(props)
    return (
        <div style={{backgroundColor: props.color}} onClick={() => props.history.goBack()}>
            <h2>{props.title}</h2>
            <h2>{props.color}</h2>
        </div>
    )
}

const ColorDetailsComp = connect(
    (state, props) => findById(state.colors, props.match.params.id)
)(ColorDetails)

export default ColorDetailsComp
