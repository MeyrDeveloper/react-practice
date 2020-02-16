import {compose} from 'redux'

export const getFirstArrayItem = (obj) => {
    return obj[0]
}

export const filterArrayById = (array, id) => {
    console.log(array.filter(item => item.id === id))
    return array.filter(item => item.id === id)
}

export const findById = compose(
    getFirstArrayItem,
    filterArrayById
)