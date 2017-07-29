import {fromJS} from 'immutable'

const initialState = fromJS({
    language: 'th',
})

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
