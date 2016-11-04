import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {query: ""};
    this.update = this.update.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({query: e.target.value});
  }

  render() {
    return (
      <div className={"search-bar"}>
        <input className={"search-bar-input"}
          type="text" placeholder="Search for products..."
          value={this.state.query} onChange={this.update}/>
      </div>
    );
  }
}

export default SearchBar;
