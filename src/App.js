import React from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';

import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />

      <Navbar />

      <Route path="/dialogs"
        render={() => <DialogsContainer />} />

      <Route path="/profile/:userId?"
        render={() => <ProfileContainer />} />

      <Route path="/users"
        render={() => <UsersContainer />} />
    </div>
  );
}

export default App;
