import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { isEmpty } from 'lodash';

import RequireAuth from './hoc/require_auth';

import App from './app';
import UserProfileContainer from './profile/profile_container';
import ShopBoardContainer from './shop/shop_board_container';
import ShopContainer from './shop/shop_container';
import TripBoardContainer from './trip/trip_board_container';
import TripContainer from './trip/trip_container';
import PinBoard from './pin/pin_board';
import FollowerBoardContainer from './follower/follower_board_container';
import FollowingBar from './following/following_bar';
import FollowingUserContainer from './following/following_user_container';
import FollowingTrip from './following/following_trip';
import SeachBoardContainer from './search/search_board_container';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SeachBoardContainer} />
          <Route path=":username" component={RequireAuth(UserProfileContainer)}>
            <Route path="trips" component={TripBoardContainer} />
            <Route path="shops" component={ShopBoardContainer} />
            <Route path="pins" component={PinBoard} />
            <Route path="followers" component={FollowerBoardContainer} />
            <Route path="followings" component={FollowingBar}>
              <Route path="users" component={FollowingUserContainer} />
              <Route path="trips" component={FollowingTrip} />
            </Route>
          </Route>
          <Route path="shop/:shopId" component={ShopContainer} />
          <Route path="trip/:tripId" component={TripContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
