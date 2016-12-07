import React from 'react';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {query: ""};
    this.update = this.update.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({query: e.target.value});
  }

  componentWillUpdate(nextProps) {
    const path = this.props.location.pathname;
    const nextPath = nextProps.location.pathname;
    if (path ==="/" && path !== nextPath ) {
      this.setState({query: ""});
    }
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.submitSearch(this.state.query);
    const path = this.props.location.pathname;
    if (path !== "/") {
      this.props.router.push("/");
    }
  }

  handleKeyUp(e) {
    if (e.key === "Enter") {
      this.handleSearch(e);
    }
  }

  render() {
    return (
      <div className={"search-bar"}>
        <input className={"search-bar-input"}
          type="text" placeholder="Search for products..."
          value={this.state.query} onChange={this.update} onKeyUp={this.handleKeyUp}/>
        <button className={"search-bar-btn"} onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default withRouter(SearchBar);
