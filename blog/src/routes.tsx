import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/home_page';
import PostPage from './pages/post_page';
import PanelLogin from './pages/panel-login';
import PanelRegister from './pages/panel-register';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/adm/panel/register" exact component={PanelRegister} />
        <Route path="/adm/panel/login" exact component={PanelLogin} />
        <Route path="/post" component={PostPage} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
