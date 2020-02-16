import C from '../../../src/store/constants'
import color from '../../../src/store/reducers/color'
import deepFreeze from 'deep-freeze'


describe("color Reducer", () => {
    it('ADD COLOR success', () => {
        const state = {};
        const action = {
            type: C.ADD_COLOR,
            id: 0,
            title: 'Test Deal',
            color: '#0df04f',
            timestamp: new Date().toString
        }

        deepFreeze(state)
        deepFreeze(action)
        expect(color(state, action))
            .toEqual({
                id: 0,
                title: 'Test Deal',
                color: '#0df04f',
                timestamp: action.timestamp
            })
    })

    it('Rate Color success', () => {
        const state = {
            id: 0,
            title: 'Test teal',
            color: '#000000',
            timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
            rating: undefined
        }

        const action = {
            type: C.RATE_COLOR,
            id: 0,
            rating: 3
        }

        deepFreeze(state)
        deepFreeze(action)
        expect(color(state, action))
            .toEqual({
                id: 0,
                title: 'Test teal',
                color: '#000000',
                timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
                rating: 3
            })
    })
})