import { combineReducers, createStore } from "redux";

import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import userReducer from './users-reducer'
import authReducer from './auth-reducer'

let reducers = combineReducers({
    postPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer
});

let store = createStore(reducers);

export default store;