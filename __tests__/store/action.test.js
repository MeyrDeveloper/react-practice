import C from '../../src/store/constants'
import {addColor} from '../../src/store/actions'
import deepFreeze from 'deep-freeze'
import storeFactory from '../../src/store'

describe('Add Color', () => {
    let store

    const colors = [
        {
            "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
            "title": "ocean at dusk",
            "color": "#00c4e2",
            "rating": 5,
            "timestamp": "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
        }
    ]

    beforeAll(() => {
        store = storeFactory({colors})
        store.dispatch(addColor('Dark blue', '#233233'))
    })

    it("should add a new color", () =>
        expect(store.getState().colors.length).toBe(2))
    it("should add a unique guid id", () =>
        expect(store.getState().colors[1].id.length).toBe(36))
    it("should set the rating to 0", () =>
        expect(store.getState().colors[1].rating).toBe(0))
    it('should timestamp', () =>
        expect(store.getState().colors[1].timestamp).toBeDefined()
    )
})