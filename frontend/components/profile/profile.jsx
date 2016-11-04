import React from 'react';
import { Link } from 'react-router';

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  renderName() {
    if (!this.props.currentUser) return "";

    let firstname = this.props.currentUser.firstname || "";
    let lastname = this.props.currentUser.lastname || "";
    return firstname + lastname !== "" ? `${firstname} ${lastname}` : this.props.currentUser.username;
  }

  renderImage() {
    if (!this.props.currentUser) return (<img src="" />);

    let img_url = this.props.currentUser.img_url;
    if (!img_url) {
      img_url =  "http://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/11/dogelog.jpg";
    }
    return (<img src={img_url} className="profile-picture"/>);
  }

  renderProfileButton() {
    //this should return the EDIT button OR Follow/Followed button
    return (<button className="profile-btn">Edit Profile</button>);
  }

  renderNavbar() {
    let [tripCount, shopCount, pinCount, followerCount, followingCount] = [0,0,0,0,0];
    return (
      <ul className="navbar-list">
        <li className="list-item">
          <Link>
            <span className={"list-number"}>{tripCount}</span><br /> Trips
          </Link>
        </li>
        <li className="list-item">
          <Link to={'/profile/shops'}>
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
         <div className="profile-board">
           {this.props.children}
         </div>
       </div>
     );
   }
 }

export default Profile;
