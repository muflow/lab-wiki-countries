import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';



import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

class App extends React.Component {
  


  render () {
  return (
    <>
    <div className="App">
      <Navbar name="Lab-WikiCountries" />
    </div>
      
      <div className="container">
      <CountriesList />
      
      <Switch>
      <Route path='/:id' component={CountryDetails} />
    
      
      </Switch>
  
      </div>


    
    </>
  );
  }
}

export default App;
