import { applyMiddleware, createStore } from 'redux'

import reducer from 'reducers/combine'

import ReduxThunk from 'redux-thunk'

import Promise from 'redux-promise-middleware'

import initialState from 'store/default'

const middleware = applyMiddleware(Promise(), ReduxThunk)



export default function(){

    const Store = createStore(reducer, initialState, middleware);

    return Store
}
