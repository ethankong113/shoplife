import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { isEmpty } from 'lodash';

import RequireAuth from './hoc/require_auth';

import App from './app';
import UserProfileContainer from './profile/profile_container';
import ShopBoardContainer from './shop/shop_board_container';
import ShopContainer from './shop/shop_container';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path=":username" component={RequireAuth(UserProfileContainer)}>
            <Route path="shops" component={ShopBoardContainer}></Route>
          </Route>
          <Route path="shop/:shopId" component={ShopContainer}>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
