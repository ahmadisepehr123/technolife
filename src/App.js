import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js'
import Header from "./Components/Header/Header.js"
import Image from './Components/Image/Image.js'

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Header/>
        <Image/>
      </div>
    )
  }
}

export default App;
