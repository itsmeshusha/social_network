import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import {userReducer} from './usersReducer'

export type StateType = ReturnType<typeof reducers>

export type StoreReduxType = typeof store


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer
});

let store = createStore(reducers);


export default store;