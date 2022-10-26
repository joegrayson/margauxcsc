import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducer, productDetailsReducer } from './reducers/productReducers';
import { authReducer, userReducer, forgotPasswordReducer } from './reducers/userReducers'

import thunk from 'redux-thunk';

const reducer = combineReducers ({
    products: productsReducer,
    productDetails: productDetailsReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
})

let initialState = {}

const middleware = [thunk]
const store = createStore (reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;