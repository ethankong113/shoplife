import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { createShop } from '../../actions/shop_actions';
import { getCurrentUser } from '../../utils/selectors';
import { mediumModal } from '../../utils/modal_style';
import { isEmpty } from 'lodash';

class CreateShopModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shopname: "", description: "", location: "", img_url: ""};
  }

  componentWillUpdate(nextProps) {
    let shop = nextProps.shopDetail.shop;
    if (!isEmpty(shop)) {
      console.log("Bang!")
      nextProps.toggleModal();
    }
  }

  componentDidUpdate() {
    this.displayLabel();
  }

  handleSubmit(props) {
    return e => {
      e.preventDefault();
      this.state.owner_id = props.currentUser.id;
      props.createShop(this.state);
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

  displayLabel() {
    const { shopname, description, location, img_url } = this.state;
    if (shopname == "") {
      $('#shopname-label').removeClass('display-label');
      $('#shopname-label').addClass('hide-label');
    } else {
      $('#shopname-label').removeClass('hide-label');
      $('#shopname-label').addClass('display-label');
    }
  }

   render() {
     const { shopname, description, location, img_url } = this.state;
     return (
       <Modal isOpen={this.props.isOpen} style={mediumModal()} id="add-shop-modal">
         <button className="close-form-btn" onClick={this.props.toggleModal}>X</button>
         <form onSubmit={this.handleSubmit(this.props)} className="add-shop-form">
           <label className="add-shop-label hide-label" id="shopname-label">Shop Name</label><br />
           <input className="add-shop-field" placeholder="Shop Name" type="text" name="shopname" onChange={this.update("shopname")} value={shopname}/><br />
           <label className="add-shop-label">Description{this.charLeft()}</label><br />
           <textarea className="add-shop-field add-shop-textarea" name="description" onChange={this.update("description")} value={description}></textarea><br />
           <label className="add-shop-label">Location</label><br />
           <input className="add-shop-field" type="text" name="location" onChange={this.update("location")} value={location}/><br />
           <label className="add-shop-label">Image Link</label><br />
           <input className="add-shop-field" type="text" name="img_url" onChange={this.update("img_url")} value={img_url}/><br />
           <button className="add-shop-btn">Create</button>
         </form>
       </Modal>
     );
   }
 }

 const mapStateToProps = (state) => ({
    currentUser: getCurrentUser(state.session),
    shopDetail: state.shopDetail
  });

  const mapDispatchToProps = (dispatch) => ({
     createShop: (shop)=>{dispatch(createShop(shop));}
  });

export default connect(mapStateToProps, mapDispatchToProps)(CreateShopModal);
