import React from 'react';
import { withRouter } from 'react-router';
import AddTripModal from './add_trip_modal';
import EditTripModal from './edit_trip_modal';
import { isEmpty } from 'lodash';
import Modal from '../modal/modal';

class TripBoard extends React.Component {

  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {openModal: false, modalType: null, tripId: null};
  }

  componentWillMount() {
    const {params, requestType, fetchTripListByUser, fetchTripListByFollower} = this.props;
    let username = params.username;
    if (requestType === "BY_FOLLOWER") {
      fetchTripListByFollower(username);
    } else {
      fetchTripListByUser(username);
    }
  }

  componentWillUnmount() {
    this.props.clearTripList();
  }

  _renderAddTrip() {
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

  _renderTripButton(id, user_id) {
    if (this.props.currentUser) {
      if (this._isProfileOwner() && this._isTripOwner(user_id)) {
        return <button className="trip-btn" onClick={this.toggleModal("EditModal", id)}>Edit</button>;
      }
      // block following/unfollowing trips in tripboard until next update.
      // else if (!this._isProfileOwner() && this._isTripOwner(user_id)) {
      //   return <button className="trip-btn-static">Your Trip</button>;
      // } else {
      //   return <button className="trip-btn">Follow</button>;
      // }
    }
  }

  renderTripList() {
    let list = this.props.trips;
    const requestType = this.props.requestType;
    let renderTripList = [];
    if (this._isProfileOwner() && requestType !== "BY_FOLLOWER") {
      renderTripList.push(this._renderAddTrip());
    }
    if (!isEmpty(list)) {
      let tripItems = list.map((trip) => {
        const {id, tripname, img_url, user_id} = trip;
          return (
            <li className="board-card" key={id} onClick={this.enterTripPage(id)}>
              <div className="card-frame">
                <div className="picture-frame">
                  <img className="trip-picture" src={img_url} />
                  <div className="trip-btn-field">{this._renderTripButton(id, user_id)}</div>
                </div>
                <div className="trip-detail">
                  <span className="trip-name">{tripname}</span>
                </div>
              </div>
            </li>
          );
        }
      );
      renderTripList = renderTripList.concat(tripItems);
    }
    const itemCount = renderTripList.length;
    return (
      <ul className={`trip-list-${itemCount}`}>
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

  _isProfileOwner() {
    const {currentUser, params} = this.props;
    if (currentUser) {
      return params.username === currentUser.username;
    }
    return false;
  }

  _isTripOwner(id) {
    const {currentUser} = this.props;
    if (currentUser) {
      return id === currentUser.id;
    }
    return false;
  }

  isModalOpen(type) {
    const {openModal, modalType} = this.state;
    return openModal && modalType === type;
  }

   render() {
     const {openModal, modalType, tripId} = this.state;
     return (
       <div className={"trip-board-wrapper"}>
         <div className={"trip-board"}>
           <div>{this.renderTripList()}</div>
         </div>
         <Modal isOpen={this.isModalOpen("AddModal")} modalName="add-trip" closeModal={this.toggleModal(null)}>
           <AddTripModal modalType={modalType} toggleModal={this.toggleModal}/>
         </Modal>
         <Modal isOpen={this.isModalOpen("EditModal")} modalName="edit-trip" closeModal={this.toggleModal(null)}>
           <EditTripModal modalType={modalType} toggleModal={this.toggleModal} tripId={tripId}/>
         </Modal>
       </div>
     );
   }
 }

export default withRouter(TripBoard);
