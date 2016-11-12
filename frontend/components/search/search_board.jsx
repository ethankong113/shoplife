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

   render() {
     return (
       <ProductBoardContainer requestType="BY_SEARCH" />
     );
   }
 }

 export default SearchBoard;
