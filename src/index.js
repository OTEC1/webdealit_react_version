import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'

const rootElement = document.getElementById("root");


if(rootElement.hasChildNodes()){
  ReactDOM.hydrate(
    <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>, rootElement);
}else{
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,rootElement);
}


