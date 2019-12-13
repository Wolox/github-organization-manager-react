import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import store from '~redux/store';
import { setCurrentUser, getCurrentUser, removeCurrentUser } from 'services/AuthServices';
import { authInit, logout } from 'redux/Auth/actions';
import { useAuth0 } from 'react-auth0-spa';

import { apiSetup } from '../config/api';

import SimpleSpinner from './components/SimpleSpinner';
import Routes from './components/Routes';

import '../scss/application.scss';

function App() {
  const { getTokenSilently, loading, user, isAuthenticated } = useAuth0();
  useEffect(() => {
    const getToken = async () => {
      const hasToken = await getCurrentUser();
      if (!loading && !hasToken) {
        const token = await getTokenSilently();
        setCurrentUser(token);
      }
    };
    if (!loading) {
      apiSetup(store.dispatch);
    }

    if (!loading && !isAuthenticated) {
      store.dispatch(logout());
      removeCurrentUser();
    } else {
      getToken();
      store.dispatch(authInit(user));
    }
  }, [user, isAuthenticated, loading, getTokenSilently]);

  return <Provider store={store}>{loading ? <SimpleSpinner center /> : <Routes />}</Provider>;
}

export default App;
