import React, { lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';

import Routes from '~constants/routes';
import { history } from '~redux/store';

import Suspense from '../Suspense';

import AuthenticatedRoute from './components/AuthenticatedRoute';

const Home = lazy(() => import('~screens/Home'));
const Login = lazy(() => import('~screens/Login'));
const RepoCreation = lazy(() => import('~screens/RepoCreation'));
const Teams = lazy(() => import('~screens/Teams'));
const AddMemberToTeam = lazy(() => import('~screens/AddMemberToTeam'));
const AddMember = lazy(() => import('~screens/AddMember'));
const AddOwnerToRepo = lazy(() => import('~screens/AddOwner'));

function AppRoutes() {
  return (
    <ConnectedRouter history={history}>
      <Suspense>
        <Switch>
          <Route path={Routes.LOGIN} component={Login} />
          <AuthenticatedRoute path={Routes.HOME} exact component={Home} />
          <AuthenticatedRoute path={Routes.REPO_CREATION} exact component={RepoCreation} />
          <AuthenticatedRoute path={Routes.TEAMS} exact component={Teams} />
          <AuthenticatedRoute path={Routes.ADD_MEMBER_TO_TEAM} exact component={AddMemberToTeam} />
          <AuthenticatedRoute path={Routes.ADD_MEMBER} exact component={AddMember} />
          <AuthenticatedRoute path={Routes.ADD_OWNER_TO_REPO} exact component={AddOwnerToRepo} />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  );
}

export default AppRoutes;
