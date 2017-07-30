import reducer,{initialState} from '../app'

describe('Test App reducer', ()=> {
    test('Default state not empty', ()=> {
        expect(reducer(initialState,{})).toEqual(initialState)
    })
    it('should set new app language in reducer', ()=> {
        const actual = reducer(initialState, {
            type: 'SET_LOCALE',
            locale: 'en'
        })
        expect(actual.get('locale')).toEqual('en')
    })
})