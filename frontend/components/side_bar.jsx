import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getCurrentUser, extractTripList } from '../utils/selectors';
import { fetchTripListBySideBar, clearSideBar } from '../actions/trip_list_actions';
import { clearTrip } from '../actions/trip_actions';

class SideBar extends React.Component {

  constructor(props) {
    super(props);
  }

  renderTripList() {
    const {currentUser, trips} = this.props;
    if (trips.length !== 0) {
      return (
        trips.map((trip) => {
          return (
            <Link to={`trip/${trip.id}`} key={trip.id}>
              <li className="side-bar-item">
                <img className="side-bar-img" src={trip.img_url} />
                <span className="side-bar-text">{trip.tripname}</span>
              </li>
            </Link>
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
    const oldSession = this.props.currentUser;
    const {trips, fetchTripList, clearTripList, currentUser} = nextProps;
    if (!oldSession && currentUser) {
      fetchTripList(currentUser.username);
    } else if (oldSession && !currentUser) {
      clearTripList();
    }
  }

  render() {
    return (
      <ul className="side-bar">
        { this.renderTripList() }
        <li className="side-bar-item">
          <img className="side-bar-img" src="https://res.cloudinary.com/dmvxkwwde/image/upload/v1481772452/assets/827.png" alt="about"/>
          <span className="side-bar-text">About ShopLife</span>
        </li>
        <a href="https://github.com/ethankong113/shoplife" target="_blank">
          <li className="side-bar-item">
            <img className="side-bar-img" src="https://res.cloudinary.com/dmvxkwwde/image/upload/v1481772529/assets/github.png" alt="github"/>
            <span className="side-bar-text">Ethan's Github</span>
          </li>
        </a>
        <a href="https://www.linkedin.com/in/ethanwkong/" target="_blank">
          <li className="side-bar-item">
            <img className="side-bar-img" src="https://res.cloudinary.com/dmvxkwwde/image/upload/v1481772071/assets/linkedin_circle_black-512.png" alt="linkedin"/>
            <span className="side-bar-text">Ethan's LinkedIn</span>
          </li>
        </a>
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
   currentUser: getCurrentUser(state.session),
   trips: extractTripList(state.sideBar.trips)
 });

const mapDispatchToProps = (dispatch) => ({
   fetchTripList: (username)=>{dispatch(fetchTripListBySideBar(username));},
   clearTripList: ()=>{dispatch(clearSideBar());},
   clearTrip: ()=>{dispatch(clearTrip());}
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
