import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { createTrip } from '../../actions/trip_actions';
import { getCurrentUser } from '../../utils/selectors';
import { mediumModal } from '../../utils/modal_style';
import { isEmpty } from 'lodash';
import { withRouter } from 'react-router';

class AddTripModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tripname: "", purpose: "", date: "", img_url: ""};
  }

  componentWillUpdate(nextProps) {
    let trip = nextProps.trip.trip;
    if (!isEmpty(trip) && this.props.modalType === "AddModal") {
      nextProps.router.push(`trip/${trip.id}`);
    } else if (this.props.modalType === "AddModal" && nextProps.modalType === null) {
      this.setState({tripname: "", purpose: "", date: "", img_url: ""});
    }
  }

  handleSubmit(props) {
    return e => {
      e.preventDefault();
      this.state.user_id = props.currentUser.id;
      let result = props.createTrip(this.state);
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
       <Modal isOpen={this.props.isOpen} style={mediumModal()} id="trip-modal">
         <button className="close-form-btn" onClick={this.props.toggleModal("AddTrip")}>X</button>
         <form method="post" onSubmit={this.handleSubmit(this.props)} className="trip-form">
           <label className="trip-label" id="tripname-label">Trip Name</label><br />
           <input className="trip-field" type="text" name="tripname" onChange={this.update("tripname")} value={tripname}/><br />
           <label className="trip-label">Purpose{this.charLeft()}</label><br />
           <textarea className="trip-field trip-textarea" name="purpose" onChange={this.update("purpose")} value={purpose}></textarea><br />
           <label className="trip-label">Date</label><br />
           <input className="trip-field" type="date" name="date" onChange={this.update("date")} value={date}/><br />
           <label className="trip-label">Image Link</label><br />
           <input className="trip-field" type="text" name="img_url" onChange={this.update("img_url")} value={img_url}/><br />
           <button className="trip-btn">Create Trip</button>
         </form>
       </Modal>
     );
   }
 }

 const mapStateToProps = (state) => ({
    currentUser: getCurrentUser(state.session),
    trip: state.trip
  });

  const mapDispatchToProps = (dispatch) => ({
     createTrip: (trip)=>{dispatch(createTrip(trip));}
  });

AddTripModal = withRouter(AddTripModal);

export default connect(mapStateToProps, mapDispatchToProps)(AddTripModal);
