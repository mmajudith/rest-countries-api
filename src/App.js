import React from 'react';
import { RiMoonLine } from "react-icons/ri"
import { IoMdMoon } from 'react-icons/io'
import Countries from './Components/Countries'
import './App.scss';

function App() {


  return (
    <div  className="App-light">

      <header>
        <div className="inner-header">
          <div>
            <h2>Where in the World?</h2>
          </div>
          <div className="icons">
            <RiMoonLine className="light-moon"/>
            <IoMdMoon className="dark-moon"/>
            <span>Dark mode</span>
          </div> 
        </div>
      </header>
      
      <Countries />
    </div>
  );
}

export default App;
