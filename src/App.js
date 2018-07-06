import React, { Component } from 'react';
import './App.css';
import NavBar from './js/components/navbar';
import Footer from './js/components/footer';
import Body from './js/components/body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
