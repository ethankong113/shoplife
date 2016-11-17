import React from 'react';
import ProductBoardContainer from '../product/product_board_container';

class SearchBoard extends React.Component {

  componentWillMount() {
    const { search, fetchProductList } = this.props;
    fetchProductList(search.query);
  }

  componentWillUpdate(nextProps) {
    const { search, fetchProductList } = this.props;
    if (search.query !== nextProps.search.query) {
      fetchProductList(nextProps.search.query);
    }
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
       </div>
     );
   }
 }

 export default SearchBoard;
