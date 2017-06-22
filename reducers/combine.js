import { combineReducers } from 'redux'

import meta from './meta'
import extras from './extras'

export default combineReducers({
    meta: meta,
    extras: extras,
})
