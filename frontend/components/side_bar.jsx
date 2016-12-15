import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getCurrentUser, extractTripList } from '../utils/selectors';
import { fetchTripListBySideBar } from '../actions/trip_list_actions';

class SideBar extends React.Component {

  renderTripList() {
    const {currentUser, trips} = this.props;
    if (trips.length !== 0) {
      return (
        trips.map((trip) => {
          return (
            <li key={trip.id} className="side-bar-item">
              <img className="side-bar-img" src={trip.img_url} />
              <span>{trip.tripname}</span>
            </li>
          );
        })
      );
    }
  }

  componentWillMount() {
    const {currentUser, fetchTripList} = this.props;
    if (currentUser) {
      fetchTripList(currentUser.username);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const {trips} = nextProps;
    if (this.props.trips.length !== trips.length) {
      console.log(trips);
    }

    //clear list when logout too
  }

  render() {
    return (
      <ul className="side-bar">
        { this.renderTripList() }
        <li className="side-bar-item">
          <img className="side-bar-img" src="https://res.cloudinary.com/dmvxkwwde/image/upload/v1481772452/assets/827.png" alt="about"/>
          <span>About ShopLife</span>
        </li>
        <li className="side-bar-item">
          <img className="side-bar-img" src="https://res.cloudinary.com/dmvxkwwde/image/upload/v1481772529/assets/github.png" alt="github"/>
          <span>Ethan's Github</span>
        </li>
        <li className="side-bar-item">
          <img className="side-bar-img" src="https://res.cloudinary.com/dmvxkwwde/image/upload/v1481772071/assets/linkedin_circle_black-512.png" alt="linkedin"/>
          <span>Ethan's LinkedIn</span>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
   currentUser: getCurrentUser(state.session),
   trips: extractTripList(state.sideBar.trips)
 });

const mapDispatchToProps = (dispatch) => ({
   fetchTripList: (username)=>{dispatch(fetchTripListBySideBar(username));}
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
