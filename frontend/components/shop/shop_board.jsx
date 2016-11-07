import React from 'react';
import { withRouter } from 'react-router';
import CreateShopModal from './create_shop_modal';

class ShopBoard extends React.Component {

  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {openModal: false};
  }

  renderAddShop() {
    if (this._isOwner()) {
      return (
        <div className={"board-card"}>
          <button className={"add-shop-btn"} onClick={this.toggleModal}>
            <div className={"add-shop-content"}>
              <span className={"add-shop-sign"}>+</span>
              <span className={"add-shop-text"}>Create Shop</span>
            </div>
          </button>
        </div>
      );
    }
  }

  toggleModal() {
    if (this.state.openModal) {
      this.setState({openModal: false});
    } else {
      this.setState({openModal: true});
    }
  }

  _isOwner() {
    if (this.props.currentUser) {
      return this.props.params.username === this.props.currentUser.username;
    }
    return false;
  }

   render() {
     return (
       <div className={"shop-board-wrapper"}>
         <div className={"shop-board"}>
           {this.renderAddShop()}
           {this.renderAddShop()}
           {this.renderAddShop()}
         </div>
         <CreateShopModal isOpen={this.state.openModal} toggleModal={this.toggleModal}/>
       </div>
     );
   }
 }

export default withRouter(ShopBoard);
