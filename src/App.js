import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  


  render () {
  return (
    <div className="App">
      <Navbar name="Lab-WikiCountries" />
      <CountriesList />
      <Switch>
          
          
          <Route exact path="/:cca3" component={CountryDetails}/>
        </Switch>

    </div>
  );
  }
}

export default App;
