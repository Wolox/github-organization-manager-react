import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import { apiSetup } from '../config/api';
import store from '../redux/store';

import SimpleSpinner from './components/SimpleSpinner';
import Routes from './components/Routes';

import { setCurrentUser, getCurrentUser } from 'services/AuthServices';
import { authInit, logout } from 'redux/Auth/actions';
import { useAuth0 } from 'react-auth0-spa';

import '../scss/application.scss';

function App() {
  const { getTokenSilently, loading, user, isAuthenticated } = useAuth0();
  const getToken = async () => {
    const hasToken = await getCurrentUser();
    if (!loading && !hasToken) {
      const token = await getTokenSilently();
      setCurrentUser(token);
    }
  };
  useEffect(() => {
    apiSetup(store.dispatch);
    if (!loading && !isAuthenticated) {
      store.dispatch(logout());
    } else {
      getToken();
      store.dispatch(authInit(user));
    }
  }, [user, isAuthenticated]);

  return <Provider store={store}>{loading ? <SimpleSpinner center /> : <Routes />}</Provider>;
}

export default App;
