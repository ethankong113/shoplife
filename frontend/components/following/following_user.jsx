import React from 'react';
import { isEmpty } from 'lodash';
import { withRouter } from 'react-router';

class FollowingUser extends React.Component {

  componentWillMount() {
    this.props.fetchFollowees(this.props.params.username);
    this.enterProfile = this.enterProfile.bind(this);
  }

  renderFollowees() {
    const followees = this.props.followees;
    if (!isEmpty(followees)) {
      const followeeList = followees.map((followee) => {
        const { id, username, img_url, firstname, lastname } = followee;
        let followeeName;
        if (firstname === "" && lastname === "") {
          followeeName = username;
        } else {
          followeeName = `${firstname} ${lastname}`;
        }

        return (<li className="followee-item" key={id} onClick={this.enterProfile(`/${username}`)}>
        <div className="followee-img"><img src={img_url} /></div>
        <div className="followee-name">{followeeName}</div>
      </li>);
    });
      return (
        <ul className="followee-list">
          { followeeList }
        </ul>
      );
    }
  }

  enterProfile(path) {
    return e => {
      this.props.router.push(path);
    };
  }

   render() {
     return (
       <div className="followee-board-wrapper">
         <div className="followee-board">
           {this.renderFollowees()}
         </div>
       </div>
     );
   }
 }

  export default withRouter(FollowingUser);
