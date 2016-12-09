import React from 'react';
import { Link } from 'react-router';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    if (this._isProfileOwner()) {
      this.state = {owner: true};
    } else {
      this.state = {owner: false};
    }
    this.followUser = this.followUser.bind(this);
    this.unfollowUser = this.unfollowUser.bind(this);
  }

  componentWillMount() {
    const {readProfile, params} = this.props;
    readProfile(params.username);
  }

  componentWillUpdate(nextProps) {
    const {params, location, profile, readProfile, clearFollowers} = this.props;
    if (this._isProfileOwner() && !this.state.owner) {
      this.setState({owner: true});
    } else if (!this._isProfileOwner() && this.state.owner) {
      this.setState({owner: false});
    }
    if (profile && params.username !== profile.username) {
      readProfile(params.username);
    }
  }

  componentWillUnmount() {
    this.props.clearProfile();
  }

  renderName() {
    if (this.props.profile) {
      const { firstname, lastname, username } = this.props.profile;
      return firstname + lastname !== "" ? `${firstname} ${lastname}` : username;
    }
  }

  renderImage() {
    if (this.props.profile) {
      let img_url = this.props.profile.img_url;
      return (<img src={img_url} className="profile-picture"/>);
    }
  }

  renderProfileButton() {
    if (this.props.currentUser) {
      let status = this.state.owner;
      if (status) {
        return (<button className="profile-btn">Edit Profile</button>);
      } else if (this.props.profile && this.props.profile.followed) {
        return (<button className="profile-btn-alt" onClick={this.unfollowUser}>Unfollow</button>);
      } else {
        return (<button className="profile-btn" onClick={this.followUser}>Follow</button>);
      }
    }
  }

  renderNavbar() {
    const username = this.props.params.username;
    const profile = this.props.profile;
    const preloadedCounts = {tripCount: 0, shopCount: 0, pinCount: 0, followerCount: 0, followingCount: 0};
    let {tripCount, shopCount, pinCount, followerCount, followingCount} = profile ? profile : preloadedCounts;
    return (
      <ul className="navbar-list">
        <li className="list-item">
          <Link to={`/profile/${username}/trips`} className={this.getNavbarClass("trips")}>
            <span className={"list-number"}>{tripCount}</span><br /> Trips
          </Link>
        </li>
        <li className="list-item">
          <Link to={`/profile/${username}/shops`} className={this.getNavbarClass("shops")}>
            <span className={"list-number"}>{shopCount}</span><br /> Shops
          </Link>
        </li>
        <li className="list-item">
          <Link to={`/profile/${username}/pins`} className={this.getNavbarClass("pins")}>
            <span className={"list-number"}>{pinCount}</span><br /> Pins
          </Link>
        </li>
        <li className="list-item">
          <Link to={`/profile/${username}/followers`} className={this.getNavbarClass("followers")}>
            <span className={"list-number"}>{followerCount}</span><br /> Followers
          </Link>
        </li>
        <li className="list-item">
          <Link to={`/profile/${username}/followings/users`} className={this.getNavbarClass("followings")}>
            <span className={"list-number"}>{followingCount}</span><br /> Followings
          </Link>
        </li>
      </ul>
    );
  }

  getNavbarClass(item) {
    const pathArray = this.props.location.pathname.split("/");
    let path = pathArray[3] || "trips";
    return item === path ? "navbar-item-active" : "navbar-item";
  }

  followUser() {
    const {currentUser, profile, followUser} = this.props;
    if (currentUser) {
      let id = profile.id;
      followUser(id);
    }
  }

  unfollowUser() {
    const {currentUser, profile, unfollowUser} = this.props;
    if (currentUser) {
      let id = profile.id;
      unfollowUser(id);
    }
  }

  _isProfileOwner() {
    const {currentUser, params} = this.props;
    if (currentUser) {
      return params.username === currentUser.username;
    }
    return false;
  }

   render() {
     return (
       <div className="profile-wrapper">
         <div className="profile-detail">
           <div className="first-row">
             <h2 className="profile-name">{this.renderName()}</h2>
             <div className="profile-right-container">
               {this.renderImage()}
               {this.renderProfileButton()}
             </div>
           </div>
         </div>
         <nav className="profile-nav">
           {this.renderNavbar()}
         </nav>
         {this.props.children}
       </div>
     );
   }
 }

export default Profile;
