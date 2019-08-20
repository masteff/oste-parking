import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import spotsReducer from '../reducers/spots'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    //Store creation
    const store = createStore( 
        combineReducers({
            spots: spotsReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk)),
    )

    return store
}

