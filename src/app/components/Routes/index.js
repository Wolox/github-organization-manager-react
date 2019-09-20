import React, { lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import { history } from '../../../redux/store';
import Suspense from '../Suspense';
import Routes from '../../../constants/routes';

import AuthenticatedRoute from './components/AuthenticatedRoute';

const Home = lazy(() => import('../../screens/Home'));
const Login = lazy(() => import('../../screens/Login'));
const RepoCreation = lazy(() => import('../../screens/RepoCreation'));
const Teams = lazy(() => import('../../screens/Teams'));
const AddMemberToTeam = lazy(() => import('../../screens/AddMemberToTeam'));
const AddMember = lazy(() => import('../../screens/AddMember'));
const AddOwnerToRepo = lazy(() => import('../../screens/AddOwner'));

// TODO: poner REPO_CREATION privada. fijarme qué les pide a las rutas privadas
function AppRoutes() {
  return (
    <ConnectedRouter history={history}>
      <Suspense>
        <Switch>
          <AuthenticatedRoute isPublicRoute exact path={Routes.HOME} component={Home} />
          <AuthenticatedRoute isPublicRoute exact path={Routes.LOGIN} component={Login} />
          <AuthenticatedRoute isPublicRoute exact path={Routes.REPO_CREATION} component={RepoCreation} />
          <AuthenticatedRoute isPublicRoute exact path={Routes.TEAMS} component={Teams} />
          <AuthenticatedRoute
            isPublicRoute
            exact
            path={Routes.ADD_MEMBER_TO_TEAM}
            component={AddMemberToTeam}
          />
          <AuthenticatedRoute isPublicRoute exact path={Routes.ADD_MEMBER} component={AddMember} />
          <AuthenticatedRoute
            isPublicRoute
            exact
            path={Routes.ADD_OWNER_TO_REPO}
            component={AddOwnerToRepo}
          />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  );
}

export default AppRoutes;
