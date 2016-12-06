import React from 'react';
import ShopBoardContainer from '../shop/shop_board_container';

class FollowingShop extends React.Component {
   render() {
     return (
       <ShopBoardContainer requestType="BY_FOLLOWER"/>
     );
   }
 }

 export default FollowingShop;
