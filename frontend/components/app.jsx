import React from 'react';
import Header from './header';
import SideBar from './side_bar';
import ErrorBar from './error_bar';

const App = (props)=> {
  return (
    <div>
      <Header />
      <ErrorBar />
      {props.children}
      <SideBar />
    </div>
  );
};

export default App;
