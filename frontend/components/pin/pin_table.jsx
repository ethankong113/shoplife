//NB: to be refactored

import React from 'react';

class PinTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {createPin: false, newTripname: "", date: ""};
    this.handlePin = this.handlePin.bind(this);
    this.update = this.update.bind(this);
    this.toggleCreatePin = this.toggleCreatePin.bind(this);
  }

  _renderBtnSymbol() {
    const {createPin} = this.state;
    if (!createPin) {
      return <div className="create-btn-symbol">+</div>;
    }
  }

  _renderBtnText() {
    const {createPin} = this.state;
    let btnText = createPin ? "Back to Trips" : "Create a Trip";
    return <div className="create-btn-text">{ btnText }</div>;
  }

  _renderPinList() {
    const { showPin, pins } = this.props;
    const { createPin, newTripname, date } = this.state;
    if (pins && !createPin) {
      let pinList = pins.map((pin) => {
        const { id, tripname, img_url, has_pin } = pin;
        const _itemBtn = (has_pin) => {
          if (has_pin) {
            return (<button className="item-btn-alt">Unpin</button>);
          } else {
            return (<button className="item-btn">Pin</button>);
          }
        };
        return (
          <li className="pin-item" key={id} onClick={this.handlePin(id, has_pin)}>
            <img className="item-img" src= { img_url } />
            <span className="item-name">{pin.tripname}</span>
            { _itemBtn(has_pin) }
          </li>
        );
      });
      return pinList;
    } else if (createPin) {
      return (
        <form>
          <label>Trip Name</label>
          <input type="text" name="tripname" value={newTripname} onChange={this.update("tripname")}/>
          <label>Date</label>
          <input type="date" name="date" value={date} onChange={this.update("date")}/>
        </form>
      );
    }
  }

  handlePin(tripId, has_pin) {
    return e => {
      const { pinItem, unpinItem, productId } = this.props;
      e.preventDefault();
      has_pin ? unpinItem(tripId, productId) : pinItem(tripId, productId);
    };
  }

  toggleCreatePin(e) {
    const {createPin} = this.state;
    e.preventDefault();
    this.setState({createPin: !createPin});
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    const { showPin } = this.props;
    if (showPin) {
      return (
        <div className="pin-table">
          <h2 className="pin-header">Choose Trip</h2>
          <div>
            <div className="pin-list-wrapper">
              <ul className="pin-list">
                {  this._renderPinList() }
              </ul>
            </div>
          </div>
          <div className="pin-create-trip" onClick={this.toggleCreatePin}>
            { this._renderBtnSymbol() }
            { this._renderBtnText() }
          </div>
        </div>
      );
    }
    return <div></div>;
  }
}

export default PinTable;
