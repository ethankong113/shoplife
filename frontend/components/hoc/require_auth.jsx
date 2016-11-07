import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getCurrentUser } from '../../utils/selectors';
import { isEmpty } from 'path';

const RequireAuthWrapper = (ComposedComponent) => {
  class RequireAuth extends React.Component {

    componentWillMount() {
      if (!this.props.currentUser) {
        // this.props.router.replace("/");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.currentUser) {
        // this.props.router.push("/");
      }
    }

     render() {
       return (
         <ComposedComponent {...this.props} />
       );
     }
   }

   const mapStateToProps = (state) => ({
      currentUser: getCurrentUser(state.session)
    });

    RequireAuth = withRouter(RequireAuth);
    return connect(mapStateToProps)(RequireAuth);
};

export default RequireAuthWrapper;
