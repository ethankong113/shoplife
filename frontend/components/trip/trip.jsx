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
    const {params, readTrip} = this.props;
    readTrip(params.tripId);
  }

  componentWillUnmount() {
    this.props.clearTrip();
  }

  backToUser(username) {
    return () => {
      this.props.router.push(`/profile/${username}/trips`);
    };
  }

  renderFollowTripBtn() {
    const { trip, currentUser, followTrip, unfollowTrip } = this.props;
    const { followed, user_id, id } = trip.trip;
    if (currentUser && followed && !this._isTripOwner(user_id)) {
      return (
        <button className="trip-follow-btn-alt" onClick={()=>{unfollowTrip(id)}}>Unfollow</button>
      );
    } else if (currentUser && !followed && !this._isTripOwner(user_id)) {
      return (
        <button className="trip-follow-btn" onClick={()=>{followTrip(id)}}>Follow</button>
      );
    }
  }

  _isTripOwner(id) {
    const {currentUser} = this.props;
    if (currentUser) {
      return currentUser.id === id;
    }
    return false;
  }

   render() {
     const { tripname, username, user_img, img_url, productCount, followerCount } = this.props.trip.trip;
     return (
       <div className="trip-detail-wrapper">
         <div className="trip-detail">
           <div className="trip-nav" onClick={this.backToUser(username)}>
             <div className="trip-nav-items">
               <img className="user-img" src={ user_img } />
               <span className="nav-text">{`See ${username}'s other trips`}</span>
             </div>
           </div>
           <div className="trip-header">
             <div className="trip-info">
               <h2 className="trip-name">{ tripname }</h2>
               <div className="trip-numbers-wrapper">
                 <div className="trip-numbers">
                  <div className="product-count">
                    <span className="count-number">{ productCount }</span>
                    <span className="count-text"> Products</span>
                  </div>
                  <div className="follower-count">
                    <span className="count-number">{ followerCount }</span>
                    <span className="count-text"> Followers</span>
                  </div>
                 </div>
               </div>
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
