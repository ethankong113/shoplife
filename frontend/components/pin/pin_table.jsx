import React from 'react';

class PinTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {createPin: false, tripname: "", date: ""};
    this.handlePin = this.handlePin.bind(this);
    this.update = this.update.bind(this);
    this.toggleCreatePin = this.toggleCreatePin.bind(this);
    this.addTrip = this.addTrip.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    let oldPins = this.props.pins;
    let newPins = nextProps.pins;
    if (oldPins && newPins && oldPins.length !== newPins.length) {
      this.setState({createPin: false, tripname: "", date: ""});
    } else if (this.state.createPin && !nextState.createPin) {
      this.setState({tripname: "", date: ""});
    }
  }

  _renderPinList() {
    const { showPin, pins } = this.props;
    if (pins) {
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
    }
  }

  _renderCreatePin() {
    const { createPin, tripname, date } = this.state;
    return (
      <form className="pin-create-form">
        <label className="pin-trip-label">Trip Name</label>
        <input className="pin-trip-input" type="text" name="tripname" value={tripname} onChange={this.update("tripname")} placeholder="Trip Name"/>
        <label className="pin-date-label">Date</label>
        <input className="pin-date-input" type="date" name="date" value={date} onChange={this.update("date")}/>
      </form>
    );
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
    e.stopPropagation();
    this.setState({createPin: !createPin});
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  addTrip(e) {
    const {createTripToPin, currentUser} = this.props;
    const {tripname, date} = this.state;
    e.stopPropagation();
    let response_type = "APPEND_PIN";
    createTripToPin({tripname, date, user_id: currentUser.id, response_type});
  }

  _renderToggleBtn() {
    const {createPin} = this.state;
    if (!createPin) {
      return (
        <div className="pin-create-trip" onClick={this.toggleCreatePin}>
          <div className="add-trip-symbol">+</div>
          <div className="add-trip-text">Make New Trip</div>
        </div>
      );
    } else {
      return (
        <div className="pin-create-trip-alt">
          <button className="add-trip-cancel" onClick={this.toggleCreatePin}>Cancel</button>
          <button className="add-trip-create" onClick={this.addTrip}>Create</button>
        </div>
      );
    }
  }

  render() {
    const { showPin } = this.props;
    const { createPin } = this.state;
    if (showPin) {
      return (
        <div className="pin-table">
          <h2 className="pin-header">{createPin ? "Make New Trip" : "Choose Trip"}</h2>
          <div>
            <div className="pin-list-wrapper">
              <ul className="pin-list">
                {  createPin ? this._renderCreatePin() : this._renderPinList() }
              </ul>
            </div>
          </div>
          { this._renderToggleBtn() }
        </div>
      );
    }
    return <div></div>;
  }
}

export default PinTable;
