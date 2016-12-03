import React from 'react';
import Modal from './modal';
import TestContent from './test_content';

class TestPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.state.isOpen ? this.setState({isOpen: false}) : this.setState({isOpen: true});
  }

   render() {
     return (
       <div className="test-frame">
         <div>
           Hello World
         </div>
         <Modal isOpen={this.state.isOpen} modalName="test">
           <TestContent toggleModal={this.toggleModal}/>
         </Modal>
         <button onClick={this.toggleModal}>Open</button>
       </div>
     );
   }
 }

 export default TestPage;
