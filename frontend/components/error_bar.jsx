import React from 'react';
import { connect } from 'react-redux';

class ErrorBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUpdate() {
    $('.error-item').css('display', 'block');
  }

  handleClick(idx) {
    return e => {
      e.preventDefault();
      $(`.error-item-${idx}`).css('display', 'none');
    };
  }

  render() {
    const {sessionErrors} = this.props;
    if (sessionErrors && sessionErrors.length > 0) {
      return (
        <ul className="error-field">
          { sessionErrors.map((error, idx)=>{

            return (
              <li key={idx} className={ `error-item error-item-${idx}` } onClick={this.handleClick(idx)}>
              <span className="error-message">
                { error }
              </span>
              <button className="error-btn">
                Dismiss
              </button>
            </li>
            );
          }) }
        </ul>
      );
    } else {
      return (
        <div className="empty-item"></div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  sessionErrors: state.session.errors
});

export default connect(mapStateToProps)(ErrorBar);
