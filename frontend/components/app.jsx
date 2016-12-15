import React from 'react';
import Header from './header';
import SideBar from './side_bar';


const App = (props)=> {
  return (
    <div>
      <Header />
      {props.children}
      <SideBar />
    </div>
  );
};

export default App;
