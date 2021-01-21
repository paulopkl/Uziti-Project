import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import EditItem from '../pages/EditItem';
import CreateItem from '../pages/CreateItem';

import App from '../pages/App';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/edit/:_id" component={EditItem} />
          <Route exact path="/createItem" component={CreateItem} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;