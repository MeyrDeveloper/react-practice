import C from '../constants'
import color from './color'

export default (state = [], action) => {
    switch(action.type) {
        case C.ADD_COLOR:
            return [...state, color({}, action)]
        case C.RATE_COLOR:
            return state.map(item => (
                (item.id == action.id) ? {
                    ...item,
                    rating: action.rating
                } : item
            ))
        case C.REMOVE_COLOR:
            return state.filter(item => (
                item.id !== action.id
            ))
        default: 
            return state
    }
}