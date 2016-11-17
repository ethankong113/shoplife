//NB: to be refactored

import React from 'react';

class PinTable extends React.Component {

  constructor(props) {
    super(props);
    this.handlePin = this.handlePin.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.showPin && nextProps.currentUser && !nextProps.pins) {
      nextProps.fetchPinList(nextProps.productId);
    }
  }

  renderPinList() {
    const { showPin, pins } = this.props;
    if (showPin && pins) {
      let pinList = pins.map((pin) => {
        const { id, tripname, img_url, has_pin } = pin;
        return (
          <li className="pin-item" key={id} onClick={this.handlePin(id, has_pin)}>
            <img className="item-img" src= { img_url } />
            <span className="item-name">{pin.tripname}</span>
            { this._renderItemBtn(has_pin) }
          </li>
        );
      });
    }
  }

  handlePin(tripId, has_pin) {
    return e => {
      e.preventDefault();
      if (has_pin) {
        this.props.unpinItem(tripId, this.props.productId);
      } else {
        this.props.pinItem(tripId, this.props.productId);
      }
    };
  }

  _renderItemBtn(has_pin) {
    if (has_pin) {
      return (<button className="item-btn-alt">Unpin</button>);
    } else {
      return (<button className="item-btn">Pin</button>);
    }
  }

   render() {
      return (
        <div className="pin-table">
          <h2 className="pin-header">Choose Trip</h2>
          <div className="pin-list-wrapper">
            <ul className="pin-list">
              {  this.renderPinList }
            </ul>
          </div>
          <div className="pin-create-trip">
          </div>
        </div>
     );
   }
 }

 export default PinTable;
