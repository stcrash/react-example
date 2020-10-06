import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from 'store/reducers'
import { reducer as form } from 'redux-form'

// ...custom middlewares

const store = createStore(combineReducers({ ...reducers, form }), compose(applyMiddleware(thunk)))
export default store
