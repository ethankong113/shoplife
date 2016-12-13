import React from 'react';
import ProductBoardContainer from '../product/product_board_container';
import InfiniteScroll from 'react-infinite-scroll';

class SearchBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {offset: 0};
    this.loadMoreProducts = this.loadMoreProducts.bind(this);
  }

  componentWillMount() {
    const { search } = this.props;
    this.loadProductList(search.query, 6);
  }

  componentWillUpdate(nextProps) {
    const { search, clearProductList } = this.props;
    const newQuery = nextProps.search.query;
    if (search.query !== newQuery) {
      clearProductList();
      this.loadProductList(newQuery, 6, 0);
    }
  }

  loadMoreProducts() {
    const query = this.props.search.query;
    this.loadProductList(query, 6);
  }

  loadProductList(query, limit, offset = this.state.offset) {
    const {fetchProductList} = this.props;
    fetchProductList(query, limit, offset);
    this.setState({offset: offset + limit});
  }

  renderBannerText() {
    const { currentUser, search } = this.props;
    if (search.query != "") {
      return `Search Results for \"${search.query}\"`;
    } else if (search.query == "" && currentUser) {
      return `Welcome back, ${currentUser.username}!`;
    } else {
      return "Welcome to shopLife! Sign up to get the full experience!";
    }
  }

   render() {
     return (
       <div className="search-board">
         <div className="search-board-banner">
           { this.renderBannerText() }
         </div>
         <ProductBoardContainer requestType="BY_SEARCH" />
         <button onClick={this.loadMoreProducts}>Load More</button>
       </div>
     );
   }
 }

 export default SearchBoard;
