import React from 'react';
import ProductBoardContainer from '../product/product_board_container';

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

  componentDidMount() {
    $(window).on('scroll', (e)=>{
      if ($('.product-list').length != 0 && (window.pageYOffset + window.innerHeight) >
      ($('.product-list').offset().top + $('.product-list').height())) {
        this.loadMoreProducts();
      }
    });
  }

  componentWillUpdate(nextProps) {
    const { search, clearProductList, showLoadProducts, hideLoadProducts, clearProductListMessage } = this.props;
    const newQuery = nextProps.search.query;
    if (search.query !== newQuery) {
      clearProductList();
      this.loadProductList(newQuery, 6, 0);
    }
    //NB: Disabling end of list loading sign for now.
    // if (!showLoadProducts && nextProps.showLoadProducts) {
    //   $('.load-products-frame').css('visibility', 'visible');
    // } else if (!hideLoadProducts && nextProps.hideLoadProducts) {
    //   $('.load-products-frame').css('visibility', 'hidden');
    //   clearProductListMessage();
    // }
  }

  componentWillUnmount() {
    $(window).off('scroll');
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
         <div className="load-products-frame">
           <img src="https://res.cloudinary.com/dmvxkwwde/image/upload/v1481663999/assets/shopping_cart_loading.gif" />
         </div>
       </div>
     );
   }
 }

 export default SearchBoard;
