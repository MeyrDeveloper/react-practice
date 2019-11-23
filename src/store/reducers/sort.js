import C from '../constants'

export default (state="SORTED_BY_DATE", action) => {
    switch (action.type) {
        case C.SORT_COLOR:
            return action.sortBy
        default:
            return state
    }
}