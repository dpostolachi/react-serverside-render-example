import { combineReducers } from 'redux'

import meta from 'reducers/meta'
import extras from 'reducers/extras'

export default combineReducers({
    meta: meta,
    extras: extras,
})
