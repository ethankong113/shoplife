import React from 'react';
import { withRouter } from 'react-router';
import AddTripModal from './add_trip_modal';
import EditTripModal from './edit_trip_modal';
import { isEmpty } from 'lodash';

class TripBoard extends React.Component {

  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {openModal: false, modalType: null, tripId: null};
  }

  componentWillMount() {
    this._fetchTripList();
  }

  componentWillUnmount() {
    this.props.clearTripList();
  }

  _renderAddTrip() {
    if (this._isOwner()) {
      return (
        <li key={0} className={"board-card"}>
          <button className={"add-trip-btn"} onClick={this.toggleModal("AddModal")}>
            <div className={"add-trip-content"}>
              <span className={"add-trip-sign"}>+</span>
              <span className={"add-trip-text"}>Create Trip</span>
            </div>
          </button>
        </li>
      );
    }
  }

  _renderTripButton(id) {
    if (this._isOwner()) {
      return <button className="trip-btn" onClick={this.toggleModal("EditModal", id)}>Edit</button>;
    } else {
      return <button className="trip-btn">Follow</button>;
    }
  }

  renderTripList() {
    let list = this.props.trips;
    let renderTripList = [this._renderAddTrip()];
    if (!isEmpty(list)) {
      let tripItems = list.map((trip) => {
        const {id, tripname, img_url} = trip;
          return (
            <li className="board-card" key={id} onClick={this.enterTripPage(id)}>
              <div className="card-frame">
                <div className="picture-frame">
                  <img className="trip-picture" src={img_url} />
                </div>
                <div className="trip-detail">
                  <span className="trip-name">{tripname}</span>
                </div>
                <div className="trip-btn-field">{this._renderTripButton(id)}</div>
              </div>
            </li>
          );
        }
      );
      renderTripList = renderTripList.concat(tripItems);
    }
    return (
      <ul className="trip-list">
        {renderTripList}
      </ul>
    );
  }

  toggleModal(field, id) {
    return e => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (this.state.openModal) {
        this.setState({modalType: null, openModal: false, tripId: null});
      } else {
        this.setState({modalType: field, openModal: true, tripId: id});
      }
    };
  }

  enterTripPage(tripId) {
    return ()=> {
      this.props.router.push(`/trip/${tripId}`);
    };
  }

  _isOwner() {
    if (this.props.currentUser) {
      return this.props.params.username === this.props.currentUser.username;
    }
    return false;
  }

  _fetchTripList() {
    let username = this.props.params.username;
    if (username) {
      this.props.fetchTripListByUser(username);
    }
  }

   render() {
     return (
       <div className={"trip-board-wrapper"}>
         <div className={"trip-board"}>
           <div>{this.renderTripList()}</div>
         </div>
         <AddTripModal isOpen={this.state.openModal && this.state.modalType == "AddModal"} modalType={this.state.modalType} toggleModal={this.toggleModal}/>
         <EditTripModal isOpen={this.state.openModal && this.state.modalType == "EditModal"} modalType={this.state.modalType} toggleModal={this.toggleModal} tripId={this.state.tripId}/>
       </div>
     );
   }
 }



export default withRouter(TripBoard);
