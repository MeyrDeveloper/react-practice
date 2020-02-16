import {shallow} from 'enzyme'
import Star from '../../src/components/Colors/ui/Star'
import {configure} from 'enzyme'

describe("<Star /> UI Component", () => {
    it("renders default star", () => {
        expect(
            shallow(<Star />)
                .find('div.star')
                .length
        ).toBe(1)
    })
})