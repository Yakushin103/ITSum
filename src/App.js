import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

const App = ({ store, dispatch }) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Route path="/dialogs" render={() =>
          <Dialogs
            state={store.profilePage}
          />}
        />
        <Route path="/profile" render={() =>
          <Profile
            state={store.postPage}
            dispatch={dispatch}
          />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
