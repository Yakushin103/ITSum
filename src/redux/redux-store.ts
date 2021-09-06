import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import userReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';

const rootReducer = combineReducers({
  postPage: dialogsReducer,
  profilePage: profileReducer,
  sidebar: sidebarReducer,
  usersPage: userReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

// type RootReducerType = typeof rootReducer
// export type AppStateType = ReturnType<RootReducerType>

export type AppDispatch = typeof store.dispatch

export type AppStateType = ReturnType<typeof rootReducer>

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));




export default store;