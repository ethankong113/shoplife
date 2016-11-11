import React from 'react';
import { isEmpty } from 'lodash';
import { withRouter } from 'react-router';
import ProductBoardContainer from '../product/product_board_container';

class PinBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pin-board">
        <ProductBoardContainer requestType={"BY_PIN_BOARD"}/>
      </div>
    );
  }
 }

 export default PinBoard;
