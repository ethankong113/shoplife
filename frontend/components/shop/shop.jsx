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
     const { shopname, username, user_img, img_url, description } = this.props.shop.shop;
     return (
       <div className="shop-detail-wrapper">
         <div className="shop-detail">
           <div className="shop-nav">
             <img className="owner-img" src={ user_img } onClick={this.backToUser(username)} />
             <img className="share-img" src="https://blog.addthiscdn.com/wp-content/uploads/2015/11/share.png"/>
           </div>
           <div className="shop-header">
             <div className="shop-info">
               <h2 className="shop-name">{ shopname }</h2>
               <div>0 Products</div>
               <div>16 Followers</div>
             </div>
             <div className="shop-img-frame">
               <img className="shop-img" src= { img_url }/>
             </div>
           </div>
         </div>
         <div className="product-board">
           <ProductBoardContainer requestType={"BY_SHOP"} />
         </div>
       </div>
     );
   }
 }

 export default withRouter(Shop);
