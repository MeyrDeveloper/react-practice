import AddColorForm from './ui/AddColorForm'
import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {addColor, removeColor, rateColor, changeRoute} from '../../store/actions'
import {connect} from 'react-redux'
import ColorsList from './ui/ColorsList'
import {push} from 'connected-react-router'

export const NewColor = connect(
        (state, props) => {
            return ({
                ...state
            })
        },
        dispatch => ({
            newColor(title, color) {
                setTimeout(() => {dispatch(addColor(title, color))}, 2000)
            },
            focused(e) {
                e.preventDefault()
                console.log(1)
            },

            routeExample() {
                dispatch(changeRoute())
            }
        })
    )(AddColorForm)


    


class ColorContainer extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                some routeExample

                <Switch>
                    <Route exact path="/comps" render={() => <ColorsList colors={this.props.colors} />}></Route>
                    <Route path="/comps/some" render={() => <NewColor colors={this.props.colors} />} />
                </Switch>
            </div>
        )
    }
}

export const Colors = connect(
    (state, props) => ({
        colors: [...state.colors],
        props
    }),
    dispatch => ({
        onRate(id, rating) {
            dispatch(rateColor(id, rating))
        },
        onRemove(id) {
            dispatch(removeColor(id))
        },
    })
)(ColorContainer)