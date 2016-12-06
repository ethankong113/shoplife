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

  backToUser(username) {
    return () => {
      this.props.router.push(`/profile/${username}`);
    };
  }

  renderFollowShopBtn() {
    const { shop, currentUser, followShop, unfollowShop } = this.props;
    const { followed, owner_id, id } = shop.shop;
    if (currentUser && followed && !this._isShopOwner(owner_id)) {
      return (
        <button className="shop-follow-btn-alt" onClick={()=>{unfollowShop(id)}}>Unfollow</button>
      );
    } else if (currentUser && !followed && !this._isShopOwner(owner_id)) {
      return (
        <button className="shop-follow-btn" onClick={()=>{followShop(id)}}>Follow</button>
      );
    }
  }

  _isShopOwner(id) {
    const {currentUser} = this.props;
    if (currentUser) {
      return currentUser.id === id;
    }
    return false;
  }

   render() {
     const { shopname, username, user_img, img_url, description, productCount, followerCount } = this.props.shop.shop;
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
               <div>{ productCount } Products</div>
               <div>{ followerCount} Followers</div>
               { this.renderFollowShopBtn() }
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
