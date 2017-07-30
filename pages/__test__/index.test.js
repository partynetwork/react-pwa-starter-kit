import React from 'react'
import {shallow} from 'enzyme'

import PageIndex from '../index'

describe('Test index page ', () => {
    it('Test render with props', () => {
        const wrapper = shallow(<PageIndex/>)
        console.info("wrapper :",wrapper)
    })
})