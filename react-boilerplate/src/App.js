import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import logo from './logo.svg';
import './App.css';
import NameList from './components/NameList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NameList/>
        </div>
      </Provider>
    );
  }
}

export default App;
