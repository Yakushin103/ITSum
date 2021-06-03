import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';

import './App.css';


const App = ({ store, dispatch }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Route path="/dialogs" render={() =>
        <DialogsContainer
          state={store.profilePage}
          dispatch={dispatch}
        />}
      />
      <Route path="/profile" render={() =>
        <Profile
          state={store.postPage}
          dispatch={dispatch}
        />}
      />
    </div>
  );
}

export default App;
