import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { clearFollowings } from '../../actions/following_actions';

class FollowingBar extends React.Component {

  componentWillUnmount() {
    this.props.clearFollowings();
  }

   render() {
     const {params, children} = this.props;
     const {username} = params;
     return (
       <div className="following-panel">
         <div className="following-bar-wrapper">
           <nav className="following-navbar">
             <ul className="navbar-list">
                 <Link className="navbar-item" activeClassName="navbar-item-active" to={`/profile/${username}/followings/users`}>
                   <li>Users</li>
                 </Link>
                 <Link className="navbar-item" activeClassName="navbar-item-active" to={`/profile/${username}/followings/trips`}>
                   <li>Trips</li>
                 </Link>
                 <Link className="navbar-item" activeClassName="navbar-item-active" to={`/profile/${username}/followings/shops`}>
                   <li>Shops</li>
                 </Link>
             </ul>
           </nav>
         </div>
         <div className="following-board">
           { children }
         </div>
       </div>
     );
   }
 }

 const mapDispatchToProps = (dispatch) => ({
    clearFollowings: ()=>{dispatch(clearFollowings());}
 });

 export default connect(null, mapDispatchToProps)(FollowingBar);
