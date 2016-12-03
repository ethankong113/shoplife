import React from 'react';
import { isEmpty } from 'lodash';
import { withRouter } from 'react-router';

class FollowerBoard extends React.Component {

  componentWillMount() {
    this.props.getFollowers(this.props.params.username);
    this.enterProfile = this.enterProfile.bind(this);
  }

  componentWillUnmount() {
    this.props.clearFollowers();
  }

  renderFollowers() {
    const followers = this.props.followers;
    if (!isEmpty(followers)) {
      const followerList = followers.map((follower) => {
        const { id, username, img_url, firstname, lastname } = follower;
        let followerName;
        if (firstname === "" && lastname === "") {
          followerName = username;
        } else {
          followerName = `${firstname} ${lastname}`;
        }

        return (<li className="follower-item" key={id} onClick={this.enterProfile(`/profile/${username}`)}>
        <div className="follower-img"><img src={img_url} /></div>
        <div className="follower-name">{followerName}</div>
      </li>);
    });
      return (
        <ul className="follower-list">
          { followerList }
        </ul>
      );
    }
  }

  enterProfile(path) {
    return e => {
      this.props.router.push(path);
    }
  }

   render() {
     return (
       <div className="follower-board-wrapper">
         <div className="follower-board">
           {this.renderFollowers()}
         </div>
       </div>
     );
   }
 }

 export default withRouter(FollowerBoard);
