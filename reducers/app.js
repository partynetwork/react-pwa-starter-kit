import {fromJS} from 'immutable'

export const initialState = fromJS({
    locale: 'th',
})

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOCALE':
            return state.set('locale',action.locale)
        default:
            return state
    }
}
