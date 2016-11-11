import React from 'react';
import ProductBoardContainer from '../product/product_board_container';

class SearchBoard extends React.Component {

  componentWillMount() {

  }

   render() {
     return (
       <ProductBoardContainer requestType="BY_SEARCH" />
     );
   }
 }

 export default SearchBoard;
