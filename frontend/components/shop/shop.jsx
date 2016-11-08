import React from 'react';
import { isEmpty } from 'lodash';
import { withRouter } from 'react-router';
import ProductBoardContainer from '../product/product_board_container';

class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.backToUser = this.backToUser.bind(this);
  }

  componentWillMount() {
    let shop_id = this.props.params.shopId;
    this.props.readShop(shop_id);
  }

  componentWillUnmount() {
    this.props.clearShop();
  }

  renderEditOptions() {
    const user = this.props.currentUser;
    const owner_id= this.props.shop.shop.owner_id;
    if (user && user.id == owner_id) {
      return (
        <ul className="detail-options">
          <li className="option-item"><button className="option-btn">Edit</button></li>
          <li className="option-item"><button className="option-btn">Delete</button></li>
          <li className="option-item"><button className="option-btn">Share</button></li>
        </ul>
      );
    } else {
      return (
        <ul className="detail-options">
          <li className="option-item"><button className="option-btn">Follow</button></li>
          <li className="option-item"><button className="option-btn">Share</button></li>
        </ul>
      );
    }
  }

  backToUser(username) {
    return () => {
      this.props.router.push(`/${username}`);
    };
  }

   render() {
     const { shopname, username, user_img } = this.props.shop.shop;
     return (
       <div className="shop-detail-wrapper">
         <div className="shop-detail">
           {this.renderEditOptions()}
           <h2 className="detail-name">{ shopname }</h2>
           <div className="detail-info">
             <div className="detail-count">
               <div>0 Products</div>
               <div>16 Followers</div>
             </div>
             <div className="detail-owner" onClick={this.backToUser(username)}>
               <img className="detail-owner-img" src={ user_img } />
             </div>
           </div>
         </div>
         <div className="product-board">
           <ProductBoardContainer />
         </div>
       </div>
     );
   }
 }

 export default withRouter(Shop);
