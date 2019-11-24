import C from '../../../src/store/constants'
import {color} from '../../../src/reducers/colors'

describe("color Reducer", () => {
    it("ADD_COLOR success", () => {
        const state = {}
        const action = {
            type: C.ADD_COLOR,
            id: 0,
            title: 'TEST COLOR',
            color: '#ff3232',
            timestamp: new Date().toString()
        }

        let result = color(state, action)

        expect(result)
            .toEqual({
                id: 0,
                title: 'TEST COLOR',
                color: '#ff3232',
                timestamp: action.timestamp,
                rating: 0
            })
    })
    it("RATE_COLOR success", () => {
        const state = {
            id: 0,
            title: 'Test Teal',
            color: '#90C3D4',
            timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
            rating: undefined
        }
        const action = {
            type: C.RATE_COLOR,
            id: 0,
            rating: 4
        }

        let result = color(state, action)

        expect(result)
            .toEqual({
                id: 0,
                title: 'Test Teal',
                color: '#90C3D4',
                timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
                rating: 4
            })
    })    
})