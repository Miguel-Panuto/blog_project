import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/home_page';
import Post from './pages/post_page';
import CreateNewArticle from './pages/adm/create_new_article';
import PanelLogin from './pages/adm/login';
import PanelRegister from './pages/adm/register';
import ManageComments from './pages/adm/manage_comments';
import Panel from './pages/adm/panel';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/adm/register" exact component={PanelRegister} />
        <Route path="/adm/login" exact component={PanelLogin} />
        <Route path="/adm/panel/new-post" exact component={CreateNewArticle} />
        <Route
          path="/adm/panel/manage-comments/:id"
          component={ManageComments}
        />
        <Route path="/adm/panel/:pg" component={Panel} />
        <Route path="/adm/panel/" component={Panel} />
        <Route path="/artigo/:id" exact component={Post} />
        <Route path="/:pg/:year/:month" exact component={Home} />
        <Route path="/:pg/:tag" exact component={Home} />
        <Route path="/:pg" exact component={Home} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
