import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { createShop } from '../../actions/shop_actions';
import { getCurrentUser } from '../../utils/selectors';
import { mediumModal } from '../../utils/modal_style';
import { isEmpty } from 'lodash';
import { withRouter } from 'react-router';

class AddShopModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shopname: "", description: "", location: "", img_url: ""};
  }

  componentWillUpdate(nextProps) {
    let shop = nextProps.shop.shop;
    if (!isEmpty(shop) && this.props.modalType === "AddModal") {
      nextProps.router.push(`shop/${shop.id}`);
    } else if (this.props.modalType === "AddModal" && nextProps.modalType === null) {
      this.setState({shopname: "", description: "", location: "", img_url: ""});
    }
  }

  handleSubmit(props) {
    return e => {
      e.preventDefault();
      this.state.owner_id = props.currentUser.id;
      let result = props.createShop(this.state);
    };
  }

  update(field) {
    return e => {
      e.preventDefault();
      if (field !== "description" || e.target.value.length <= 140) {
        this.setState({[field]: e.target.value});
      }
    };
  }

  charLeft() {
    let len = this.state.description.length;
    if (len) {
      return ` (${140 - len} characters left)`;
    }
  }

   render() {
     const { shopname, description, location, img_url } = this.state;
     return (
       <Modal isOpen={this.props.isOpen} style={mediumModal()} id="shop-modal">
         <button className="close-form-btn" onClick={this.props.toggleModal("AddShop")}>X</button>
         <form method="post" onSubmit={this.handleSubmit(this.props)} className="shop-form">
           <label className="shop-label" id="shopname-label">Shop Name</label><br />
           <input className="shop-field" placeholder="Shop Name" type="text" name="shopname" onChange={this.update("shopname")} value={shopname}/><br />
           <label className="shop-label">Description{this.charLeft()}</label><br />
           <textarea className="shop-field shop-textarea" name="description" onChange={this.update("description")} value={description}></textarea><br />
           <label className="shop-label">Location</label><br />
           <input className="shop-field" type="text" name="location" onChange={this.update("location")} value={location}/><br />
           <label className="shop-label">Image Link</label><br />
           <input className="shop-field" type="text" name="img_url" onChange={this.update("img_url")} value={img_url}/><br />
           <button className="shop-btn">Create Shop</button>
         </form>
       </Modal>
     );
   }
 }

 const mapStateToProps = (state) => ({
    currentUser: getCurrentUser(state.session),
    shop: state.shop
  });

  const mapDispatchToProps = (dispatch) => ({
     createShop: (shop)=>{dispatch(createShop(shop));}
  });

AddShopModal = withRouter(AddShopModal);

export default connect(mapStateToProps, mapDispatchToProps)(AddShopModal);
