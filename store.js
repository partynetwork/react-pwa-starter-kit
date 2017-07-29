import {createStore, applyMiddleware, compose} from 'redux'
import {fromJS} from 'immutable'
import {createLogger} from 'redux-logger'
import rootReducer from './reducers'

const middlewares = [createLogger()]
const enhancers = [applyMiddleware(...middlewares)]

export const initStore = (initialState = {}) => {
    return createStore(
        rootReducer,
        fromJS(initialState),
        compose(...enhancers)
    )
}
