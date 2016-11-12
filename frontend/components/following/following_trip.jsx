import React from 'react';
import TripBoardContainer from '../trip/trip_board_container';

class FollowingTrip extends React.Component {
   render() {
     return (
       <TripBoardContainer requestType="BY_FOLLOWER"/>
     );
   }
 }

 export default FollowingTrip;
