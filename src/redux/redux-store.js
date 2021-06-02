import { combineReducers, createStore } from "redux";

import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

let reducers = combineReducers({
    postPage: profileReducer,
    profilePage: dialogsReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;