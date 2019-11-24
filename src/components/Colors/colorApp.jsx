import AddColorForm from './ui/AddColorForm'
import {addColor, removeColor, rateColor} from '../../store/actions'
import {connect} from 'react-redux'
import ColorsList from './ui/ColorsList'

export const NewColor = connect(
        null,
        dispatch => ({
            newColor(title, color) {
                dispatch(addColor(title, color))
            }
        })
    )(AddColorForm)

export const Colors = connect(
    state => ({
        colors: [...state.colors]
    }),
    dispatch => ({
        onRate(id, rating) {
            dispatch(rateColor(id, rating))
        },
        onRemove(id) {
            dispatch(removeColor(id))
        }
    })
)(ColorsList)