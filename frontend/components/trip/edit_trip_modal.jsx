import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { updateTrip, readTripToUpdate, deleteTrip, clearTrip, clearTripMessage } from '../../actions/trip_actions';
import { getCurrentUser } from '../../utils/selectors';
import { largeModal } from '../../utils/modal_style';
import { isEmpty } from 'lodash';
import { withRouter } from 'react-router';

class EditTripModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tripname: "", purpose: "", date: "", img_url: ""};
  }

  componentWillUpdate(nextProps) {
    let tripId = nextProps.tripId;
    if (tripId !== null && nextProps.modalType === "EditModal" && isEmpty(nextProps.trip)) {
      nextProps.readTripToUpdate(tripId);
    } else if (!isEmpty(nextProps.trip) && nextProps.modalType === "EditModal" && nextProps.msg.includes("SET_TRIP_FIELDS")) {
      this.setState(nextProps.trip);
      nextProps.clearTripMessage();
    } else if (!isEmpty(nextProps.trip) && nextProps.modalType === "EditModal" && nextProps.msg.includes("CLOSE_TRIP_MODAL") ) {
      this.props.toggleModal('EditModal')();
      nextProps.clearTripMessage();
    } else if (!isEmpty(nextProps.trip) && this.props.modalType === "EditModal" && nextProps.modalType === null) {
      nextProps.clearTrip();
    }
  }

  handleSubmit(type, props) {
    return e => {
      e.preventDefault();
      if (type === "edit") {
        props.updateTrip(this.state);
      } else if (type === "delete") {
        props.deleteTrip(props.trip.id);
      }
    };
  }

  update(field) {
    return e => {
      e.preventDefault();
      if (field !== "purpose" || e.target.value.length <= 140) {
        this.setState({[field]: e.target.value});
      }
    };
  }

  charLeft() {
    let len = this.state.purpose.length;
    if (len) {
      return ` (${140 - len} characters left)`;
    }
  }

   render() {
     const { tripname, purpose, date, img_url } = this.state;
     return (
       <Modal isOpen={this.props.isOpen} style={largeModal()} id="trip-modal">
         <button className="close-form-btn" onClick={this.props.toggleModal("EditTrip")}>X</button>
         <form method="post" className="trip-form">
           <label className="trip-label" id="tripname-label">Trip Name</label><br />
           <input className="trip-field" type="text" name="tripname" onChange={this.update("tripname")} value={tripname}/><br />
           <label className="trip-label">Purpose{this.charLeft()}</label><br />
           <textarea className="trip-field trip-textarea" name="purpose" onChange={this.update("purpose")} value={purpose}></textarea><br />
           <label className="trip-label">Date</label><br />
           <input className="trip-field" type="text" name="date" onChange={this.update("date")} value={date}/><br />
           <label className="trip-label">Image Link</label><br />
           <input className="trip-field" type="text" name="img_url" onChange={this.update("img_url")} value={img_url}/><br />
           <button className="trip-btn" onClick={this.handleSubmit("edit", this.props)} >Edit Trip</button>
           <button className="trip-btn-alt" onClick={this.handleSubmit("delete", this.props)}>Delete Trip</button>
         </form>
       </Modal>
     );
   }
 }

 const mapStateToProps = (state) => ({
    currentUser: getCurrentUser(state.session),
    trip: state.trip.trip,
    msg: state.trip.msg
  });

  const mapDispatchToProps = (dispatch) => ({
     updateTrip: (trip)=>{dispatch(updateTrip(trip));},
     readTripToUpdate: (id)=>{dispatch(readTripToUpdate(id));},
     deleteTrip: (id)=>{dispatch(deleteTrip(id));},
     clearTrip: ()=>{dispatch(clearTrip());},
     clearTripMessage: ()=>{dispatch(clearTripMessage());}
  });

EditTripModal = withRouter(EditTripModal);

export default connect(mapStateToProps, mapDispatchToProps)(EditTripModal);
