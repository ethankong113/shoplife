import React from 'react';
import { isEmpty } from 'lodash';
import { withRouter } from 'react-router';
import ProductBoardContainer from '../product/product_board_container';

class ShopDetail extends React.Component {

  constructor(props) {
    super(props);

  }

  componentWillMount() {
    const { shop } = this.props.shopDetail;
    if (isEmpty(shop)) {
      this.props.readShop(this.props.params.shopId);
    }
  }

  componentWillUnmount() {
    this.props.clearShop();
  }

  renderEditOptions() {
    const user = this.props.currentUser;
    const owner_id= this.props.shopDetail.shop.owner_id;
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

   render() {
     const { shopname, owner_id } = this.props.shopDetail.shop
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
             <div className="detail-owner">
               { owner_id }
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

 export default ShopDetail;
