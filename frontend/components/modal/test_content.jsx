import React from 'react';

class TestContent extends React.Component {
   render() {
     return (
       <div className="target">
         Hello World!!
         <button onClick={this.props.toggleModal}>Close This</button>
       </div>
     );
   }
 }

 export default TestContent;
