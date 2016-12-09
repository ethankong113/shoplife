import React from 'react';
import { connect } from 'react-redux';
import { createTrip } from '../../actions/trip_actions';
import { getCurrentUser } from '../../utils/selectors';
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
      const { currentUser } = this.props;
      e.preventDefault();
      this.state.user_id = currentUser.id;
      this.state.response_type = "APPEND_TRIP";
      let result = this.props.createTrip(this.state);
    };
  }

  update(field) {
    return e => {
      e.preventDefault();
      let val = e.target.value;
      if (field !== "purpose" || val.length <= 140) {
        this.setState({[field]: val});
      }
    };
  }

  charLeft() {
    let len = this.state.purpose.length;
    if (len) {
      return ` (${140 - len} characters left)`;
    }
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

   render() {
     const { tripname, purpose, date, img_url } = this.state;
     const {isOpen, toggleModal} = this.props;
     return (
       <div className="add-trip-modal" onClick={this.stopPropagation}>
         <button className="close-form-btn" onClick={toggleModal("AddTrip")}>X</button>
         <form method="post" onSubmit={this.handleSubmit()} className="trip-form">
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
       </div>
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
