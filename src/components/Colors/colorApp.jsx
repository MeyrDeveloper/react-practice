import AddColorForm from './ui/AddColorForm'
import {addColor, removeColor, rateColor} from '../../store/actions'
import {connect} from 'react-redux'
import ColorsList from './ui/ColorsList'


export const NewColor = connect(
        (state, props) => {
            return ({
                ...state
            })
        },
        dispatch => ({
            newColor(title, color) {
                setTimeout(() => {dispatch(addColor(title, color))}, 2000)
            }
        })
    )(AddColorForm)

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
        }
    })
)(ColorsList)