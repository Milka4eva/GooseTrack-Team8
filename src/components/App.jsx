import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { lazy } from 'react';
import GlobalStyle from '../globalStyles';
import { Route, Routes } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import Loader from '../components/Loader/Loader';

const Login = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Registration'));
const AccountPage = lazy(() => import('../pages/Account'));
const MainPage = lazy(() => import('../pages/Main'));
const StatisticsPage = lazy(() => import('../pages/Statisctics'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));

export const App = () => {
  const { userToken, isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      if (userToken) {
        dispatch(fetchCurrentUser(userToken));
      }
    };
    getUser();
  }, [dispatch, userToken]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" Component={PrivateRoute}>
          <Route path="account" Component={AccountPage} />
          <Route path="calendar/*" Component={CalendarPage} />
          <Route path="statistics" Component={StatisticsPage} />
        </Route>
        <Route path="/" Component={PublicRoute}>
          <Route index Component={MainPage} />
          <Route path="register" Component={RegisterPage} />
          <Route path="login" Component={Login} />
        </Route>
      </Routes>
    </>
  );
};
