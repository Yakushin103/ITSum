import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Preloader from './components/common/Preloader/Preloader';

import { initializeApp } from './redux/app-reducer';
import WithSuspenseLoading from './HOC/WithSuspenseLoading'

import './App.css';

const DialogsContainer = lazy(() =>
  import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() =>
  import('./components/Profile/ProfileContainer'));
const UsersContainer = lazy(() =>
  import('./components/Users/UsersContainer'));
const Login = lazy(() =>
  import('./components/Login/Login'));


const App = () => {
  const dispatch = useDispatch()
  const initialized = useSelector((state) => state.app.initialized)

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
          render={WithSuspenseLoading(DialogsContainer)} />

        <Route path="/profile/:userId?"
          render={WithSuspenseLoading(ProfileContainer)} />

        <Route path="/users"
          render={WithSuspenseLoading(UsersContainer)} />

        <Route path="/login"
          render={WithSuspenseLoading(Login)} />
      </div>
    </div >
  );
}

export default App;
