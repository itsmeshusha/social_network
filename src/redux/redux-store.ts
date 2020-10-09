import { authReducer } from './authReducer';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import {userReducer} from './usersReducer';
import thunkMiddleware from 'redux-thunk';


export type StateType = ReturnType<typeof reducers>

export type StoreReduxType = typeof store


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;