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

  // renderEditOptions() {
  //   const user = this.props.currentUser;
  //   const user_id= this.props.trip.trip.user_id;
  //   if (user && user.id == user_id) {
  //     return (
  //       <ul className="detail-options">
  //         <li className="option-item"><button className="option-btn">Edit</button></li>
  //         <li className="option-item"><button className="option-btn">Delete</button></li>
  //         <li className="option-item"><button className="option-btn">Share</button></li>
  //       </ul>
  //     );
  //   } else {
  //     return (
  //       <ul className="detail-options">
  //         <li className="option-item"><button className="option-btn">Follow</button></li>
  //         <li className="option-item"><button className="option-btn">Share</button></li>
  //       </ul>
  //     );
  //   }
  // }

  backToUser(username) {
    return () => {
      this.props.router.push(`/${username}`);
    };
  }

   render() {
     const { tripname, username, user_img, img_url } = this.props.trip.trip;
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
               <div>0 Products</div>
               <div>16 Followers</div>
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
