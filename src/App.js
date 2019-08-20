import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Banner from './components/banner';
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
    <Banner />
    <NavBar />
    <img src="davePlat.png" id="painting-team"/>
    </div>
  );
}

export default App;
