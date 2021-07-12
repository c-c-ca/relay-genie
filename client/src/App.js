import React, { useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Welcome from './components/pages/Welcome';
import ResetPassword from './components/pages/ResetPassword';
import ConnectAccount from './components/pages/ConnectAccount';
import SettingsContainer from './containers/SettingsContainer';
import history from './history';
import { useAuth } from './hooks';

const App = () => {
  const [, { loadUser }] = useAuth();
  useEffect(loadUser, []);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/settings" component={SettingsContainer} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/connect-account" component={ConnectAccount} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
