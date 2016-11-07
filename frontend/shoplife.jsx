import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import {signup, login, logout} from './actions/session_actions';
import {createShop, readShop, updateShop, deleteShop} from './actions/shop_actions';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', e => {
   let container = document.getElementById("container");
   let store;
   if (window.currentUser) {
     const preloadedState = {session: {currentUser: window.currentUser}};
     store = configureStore(preloadedState);
   } else {
     store = configureStore();
   }
   Modal.setAppElement(document.body);
   ReactDOM.render(<Root store={store} />, container);
   window.store = store;
  //  window.signup = signup;
  //  window.login = login;
  //  window.logout = logout;
  window.createShop = createShop;
  window.readShop = readShop;
  window.updateShop = updateShop;
  window.deleteShop = deleteShop;
 });
