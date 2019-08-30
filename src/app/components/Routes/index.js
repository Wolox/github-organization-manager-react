import React, { lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import { history } from '../../../redux/store';
import Suspense from '../Suspense';
import Routes from '../../../constants/routes';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import styles from './styles.scss';

const Home = lazy(() => import('../../screens/Dashboard'));
const Login = lazy(() => import('../../screens/Login'));
const RepoCreation = lazy(() => import('../../screens/RepoCreation'));

function AppRoutes() {
  return (
    <ConnectedRouter history={history}>
      <div className={styles.container}>
        <Suspense>
          <Switch>
            <AuthenticatedRoute isPrivateRoute exact path={Routes.HOME} component={Home} />
            <AuthenticatedRoute isPublicRoute exact path={Routes.LOGIN} component={Login} />
            <AuthenticatedRoute isPrivateRoute exact path={Routes.REPO_CREATION} component={RepoCreation} />
          </Switch>
        </Suspense>
      </div>
    </ConnectedRouter>
  );
}

export default AppRoutes;
