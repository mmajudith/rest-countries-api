import React, { useState } from 'react';
import { RiMoonLine } from "react-icons/ri"
import { IoMdMoon } from 'react-icons/io'
import Countries from './Components/Countries'
import './App.scss';
import { Route, Switch, Link } from 'react-router-dom'
import CountryDetails from './Components/CountryDetail'

function App() {
  const [toggle, setToggle] = useState(true)

  const toggleHandler = ()=>{
    setToggle(!toggle)
  }

  return (
    // <div  className="App-light">
    <div className={ toggle ? "App-light" : "App-Dark"}> 

      <header>
        <div className="inner-header">
          <div>
            <h1>Where in the World?</h1>
          </div>
          <div className="icons" onClick={toggleHandler}>
            <RiMoonLine className="light-moon"/>
            <IoMdMoon className="dark-moon"/>
            <span>Dark mode</span>
          </div> 
        </div>
      </header>
      
      <div><Link to="/rest-countries-api"></Link></div>

      <Switch>
        <Route exact path="/rest-countries-api" component={Countries }/>
        <Route exact path="/rest-countries-api/:name" component={CountryDetails} />
      </Switch>
    </div>
  );
}

export default App;
