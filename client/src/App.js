import React, { Component } from 'react';
import './App.css';
import Routes from './components/layout/navRouter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    )
  }
}
export default App;
