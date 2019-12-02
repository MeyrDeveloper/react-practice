import C from '../constants'

export default (state = {}, payload) => {
    switch(payload.type) {
        case C.ADD_COLOR:
            return {
                id: payload.id,
                color: payload.color,
                title: payload.title,
                rating: payload.rating,
                timestamp: payload.timestamp
            }
        case C.RATE_COLOR:
            return (state.id == payload.id) ? {
                ...state,
                rating: payload.rating
            } : state

        default :
            return state
    }
}

