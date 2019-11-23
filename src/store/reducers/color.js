import C from '../constants'

export default (state = {}, action) => {
    switch(action.type) {
        case C.ADD_COLOR:
            return {
                id: action.id,
                color: action.color,
                title: action.title,
                rating: action.rating,
                timestamp: action.timestamp
            }
        case C.RATE_COLOR:
            return (state.id == action.id) ? {
                ...state,
                rating: action.rating
            } : state

        default :
            return state
    }
}