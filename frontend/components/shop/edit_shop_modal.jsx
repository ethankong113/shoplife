import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { updateShop, readShopToUpdate, deleteShop, clearShop, clearShopMessage } from '../../actions/shop_actions';
import { getCurrentUser } from '../../utils/selectors';
import { largeModal } from '../../utils/modal_style';
import { isEmpty } from 'lodash';
import { withRouter } from 'react-router';

class EditShopModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shopname: "", description: "", location: "", img_url: ""};
  }

  componentWillUpdate(nextProps) {
    const {shopId, modalType, shop, msg} = nextProps;
    const {readShopToUpdate, clearShopMessage, toggleModal, clearShop} = this.props;
    if (shopId !== null && modalType === "EditModal" && isEmpty(shop)) {
      readShopToUpdate(shopId);
    } else if (!isEmpty(shop) && modalType === "EditModal" && msg.includes("SET_SHOP_FIELDS")) {
      this.setState(shop);
      clearShopMessage();
    } else if (!isEmpty(shop) && modalType === "EditModal" && msg.includes("CLOSE_SHOP_MODAL") ) {
      this.props.toggleModal('EditModal')();
      clearShopMessage();
    } else if (!isEmpty(shop) && this.props.modalType === "EditModal" && modalType === null) {
      clearShop();
    }
  }

  handleSubmit(type, props) {
    return e => {
      e.preventDefault();
      if (type === "edit") {
        props.updateShop(this.state);
      } else if (type === "delete") {
        props.deleteShop(props.shop.id);
      }
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

  stopPropagation(e) {
    e.stopPropagation();
  }

   render() {
     const { shopname, description, location, img_url } = this.state;
     return (
       <div className="edit-shop-modal" onClick={this.stopPropagation}>
         <button className="close-form-btn" onClick={this.props.toggleModal("EditShop")}>X</button>
         <form method="post" className="shop-form">
           <label className="shop-label" id="shopname-label">Shop Name</label><br />
           <input className="shop-field" type="text" name="shopname" onChange={this.update("shopname")} value={shopname}/><br />
           <label className="shop-label">Description{this.charLeft()}</label><br />
           <textarea className="shop-field shop-textarea" name="description" onChange={this.update("description")} value={description}></textarea><br />
           <label className="shop-label">Location</label><br />
           <input className="shop-field" type="text" name="location" onChange={this.update("location")} value={location}/><br />
           <label className="shop-label">Image Link</label><br />
           <input className="shop-field" type="text" name="img_url" onChange={this.update("img_url")} value={img_url}/><br />
           <button className="shop-btn" onClick={this.handleSubmit("edit", this.props)} >Edit Shop</button>
           <button className="shop-btn-alt" onClick={this.handleSubmit("delete", this.props)}>Delete Shop</button>
         </form>
       </div>
     );
   }
 }

 const mapStateToProps = (state) => ({
    currentUser: getCurrentUser(state.session),
    shop: state.shop.shop,
    msg: state.shop.msg
  });

  const mapDispatchToProps = (dispatch) => ({
     updateShop: (shop)=>{dispatch(updateShop(shop));},
     readShopToUpdate: (id)=>{dispatch(readShopToUpdate(id));},
     deleteShop: (id)=>{dispatch(deleteShop(id));},
     clearShop: ()=>{dispatch(clearShop());},
     clearShopMessage: ()=>{dispatch(clearShopMessage());}
  });

EditShopModal = withRouter(EditShopModal);

export default connect(mapStateToProps, mapDispatchToProps)(EditShopModal);
