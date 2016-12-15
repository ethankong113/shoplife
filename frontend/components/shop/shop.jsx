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
    const {params, readShop, getShopFollowers} = this.props;
    let shop_id = params.shopId;
    readShop(shop_id);
    getShopFollowers(shop_id);
  }

  componentWillUnmount() {
    const {clearShop, clearFollowers} = this.props;
    clearShop();
    clearFollowers();
  }

  backToUser(username) {
    return () => {
      this.props.router.push(`/profile/${username}/shops`);
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

  renderOtherFollowers() {
    const {followers} = this.props;
    if (followers.length != 0) {
      const barText = "Other Followers of this Shop";
      return (
        <div className="follower-bar">
          <span className="follower-text">{barText}</span>
          <ul className="follower-list">
            {followers.map((follower) => {
              return (
                <li key={follower.id} className="follower-item">
                  <img className="follower-img" src={follower.img_url} onClick={this.handleClick(follower.username)}/>
                  <span className="follower-name">{follower.username}</span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }

  handleClick(username) {
    return e => {
      const {router} = this.props;
      router.push(`/profile/${username}/pins`);
    };
  }

   render() {
     const { shopname, username, user_img, img_url, description, productCount, followerCount } = this.props.shop.shop;
     return (
       <div className="shop-detail-wrapper">
         <div className="shop-detail">
           <div className="shop-nav">
             { this.renderOtherFollowers()}
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
