
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import {reducer as AdminReducer} from "./AdminReducer/reducer"
import {reducer as UserReducer} from './UserReducer/reducer'
import {reducer as TeacherReducer} from './TeacherReducer/reducer'

const rootReducer=combineReducers({
AdminReducer,
UserReducer,
TeacherReducer
})

const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store