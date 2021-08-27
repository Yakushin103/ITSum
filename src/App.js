import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader'

import { initializeApp } from './redux/app-reducer';

import './App.css';

const App = () => {
  const dispatch = useDispatch()
  const initialized = useSelector((state) => state.app.initialized)
  const isAuth = useSelector((state) => state.auth.isAuth)

  useEffect(() => {
    dispatch(initializeApp())
  }, [dispatch, initializeApp])

  if (!initialized) {
    return <Preloader />
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />

      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs"
          render={() => <DialogsContainer />} />

        <Route path="/profile/:userId?"
          render={() => <ProfileContainer />} />

        <Route path="/users"
          render={() => <UsersContainer />} />

        <Route path="/login"
          render={() => <Login />} />
      </div>

    </div>
  );
}

export default App;
