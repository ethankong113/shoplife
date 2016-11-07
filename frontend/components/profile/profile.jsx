import React from 'react';
import { Link } from 'react-router';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    if (this._isOwner()) {
      this.state = {owner: true};
    } else {
      this.state = {owner: false};
    }
  }

  componentWillMount() {
    this.props.readProfile(this._safeParams());
  }

  componentWillUpdate() {
    if (this._getDetail() && this._safeParams() != this._getDetail().username) {
      this.props.readProfile(this._safeParams());
    }

    if (this._isOwner() && !this.state.owner) {
      this.setState({owner: true});
    } else if (!this._isOwner() && this.state.owner) {
      this.setState({owner: false});
    }
  }

  renderName() {
    if (!this._getDetail()) return "";
    let firstname = this._getDetail().firstname || "";
    let lastname = this._getDetail().lastname || "";
    return firstname + lastname !== "" ? `${firstname} ${lastname}` : this._getDetail().username;
  }

  renderImage() {
    if (!this._getDetail()) return (<img src="" />);

    let img_url = this._getDetail().img_url;
    if (!img_url) {
      img_url =  "http://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/11/dogelog.jpg";
    }
    return (<img src={img_url} className="profile-picture"/>);
  }

  renderProfileButton() {
    let status = this.state.owner;
    if (status) {
      return (<button className="profile-btn">Edit Profile</button>);
    } else {
      return (<button className="profile-btn">Follow</button>);
    }
  }

  renderNavbar() {
    let [tripCount, shopCount, pinCount, followerCount, followingCount] = [0,0,0,0,0];
    let username = this._safeParams();
    return (
      <ul className="navbar-list">
        <li className="list-item">
          <Link>
            <span className={"list-number"}>{tripCount}</span><br /> Trips
          </Link>
        </li>
        <li className="list-item">
          <Link to={`/${username}/shops`}>
            <span className={"list-number"}>{shopCount}</span><br /> Shops
          </Link>
        </li>
        <li className="list-item">
          <Link>
            <span className={"list-number"}>{pinCount}</span><br /> Pins
          </Link>
        </li>
        <li className="list-item">
          <Link>
            <span className={"list-number"}>{followerCount}</span><br /> Followers
          </Link>
        </li>
        <li className="list-item">
          <Link>
            <span className={"list-number"}>{followingCount}</span><br /> Followings
          </Link>
        </li>
      </ul>
    );
  }

  _isOwner() {
    if (this.props.currentUser) {
      return this._safeParams() === this.props.currentUser.username;
    }
    return false;
  }

  _getDetail() {
    if (this.props.profile) {
      return this.props.profile.detail;
    }
    return false;
  }

  _safeParams() {
    let username = this.props.params.username;
    let checker = window.location.hash.split('/')[1];
    if (username == checker) {
      return username;
    } else {
      return checker;
    }
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
