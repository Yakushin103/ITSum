import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';

import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />

      <Navbar />

      <Route path="/dialogs"
        render={() => <DialogsContainer />} />

      <Route path="/profile"
        render={() => <Profile />} />

      <Route path="/users"
        render={() => <UsersContainer />} />
    </div>
  );
}

export default App;
