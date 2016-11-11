import React from 'react';
import { isEmpty } from 'lodash';
import { withRouter } from 'react-router';
import ProductBoardContainer from '../product/product_board_container';

class Trip extends React.Component {

  constructor(props) {
    super(props);
    this.backToUser = this.backToUser.bind(this);
  }

  componentWillMount() {
    let trip_id = this.props.params.tripId;
    this.props.readTrip(trip_id);
  }

  componentWillUnmount() {
    this.props.clearTrip();
  }

  backToUser(username) {
    return () => {
      this.props.router.push(`/${username}`);
    };
  }

  renderFollowTripBtn() {
    const { trip, currentUser, followTrip, unfollowTrip } = this.props;
    if (currentUser && trip.trip.followed && !this._isTripOwner(trip.trip.user_id)) {
      return (
        <button className="trip-follow-btn-alt" onClick={()=>{unfollowTrip(trip.trip.id)}}>Unfollow</button>
      );
    } else if (currentUser && !trip.trip.followed && !this._isTripOwner(trip.trip.user_id)) {
      return (
        <button className="trip-follow-btn" onClick={()=>{followTrip(trip.trip.id)}}>Follow</button>
      );
    }
  }

  _isTripOwner(id) {
    if (this.props.currentUser) {
      return this.props.currentUser.id === id;
    }
    return false;
  }

   render() {
     const { tripname, username, user_img, img_url, productCount } = this.props.trip.trip;
     return (
       <div className="trip-detail-wrapper">
         <div className="trip-detail">
           <div className="trip-nav">
             <img className="user-img" src={ user_img } onClick={this.backToUser(username)} />
             <img className="share-img" src="https://blog.addthiscdn.com/wp-content/uploads/2015/11/share.png"/>
           </div>
           <div className="trip-header">
             <div className="trip-info">
               <h2 className="trip-name">{ tripname }</h2>
               <div>{ productCount } Products</div>
               <div>16 Followers</div>
               { this.renderFollowTripBtn() }
             </div>
             <div className="trip-img-frame">
               <img className="trip-img" src={ img_url } />
             </div>
           </div>
         </div>
         <div className="product-board">
           <ProductBoardContainer requestType={"BY_TRIP"} />
         </div>
       </div>
     );
   }
 }

 export default withRouter(Trip);