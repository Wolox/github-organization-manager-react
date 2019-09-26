import React, { useState, useEffect, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';
import PropTypes from 'prop-types';

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.origin);

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);

function Auth0Provider({ children, onRedirectCallback = DEFAULT_REDIRECT_CALLBACK, ...initOptions }) {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (window.location.search.includes('code=')) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticatedResponse = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticatedResponse);

      if (isAuthenticated || isAuthenticatedResponse) {
        const userResponse = await auth0FromHook.getUser();
        setUser(userResponse);
      }

      setLoading(false);
    };
    initAuth0();
    // eslint-disable-next-line
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const userResponse = await auth0Client.getUser();
    setUser(userResponse);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const userResponse = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(userResponse);
  };
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p)
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
}

Auth0Provider.propTypes = {
  onRedirectCallback: PropTypes.func
};

export { Auth0Provider };
