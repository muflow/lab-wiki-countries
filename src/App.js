import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'

import './App.css';



import Navbar from './components/Navbar';
// import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
// import countries from './countries.json';


class App extends React.Component {
  state = {
    countries: []
  }
  
componentDidMount() {
    fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
    .then(res => res.json())
    .then((data) => {
      this.setState({ countries: data })
      console.log(this.state.countries)
    })
    .catch(console.log)
  }
  
  render () {
    
  return (
    <>
    <div className="App">
      <Navbar name="Lab-WikiCountries" />
    </div>
      
      <div className="container">
      <div>
      {this.state.countries.map((country) => {
        return (
        <p key={country.cca3}>
        <Link to={`/${country.cca3}`} style={{ textDecoration: 'none' }}>

        {country.flag} {country.name.common}</Link></p>
      )
      })}
      </div>
      
      
      <Switch>
      <Route path='/:id' component={CountryDetails} />
    
      
      </Switch>
  
      </div>


    
    </>
  );
  }
}

export default App;


// class App extends React.Component {
  
//   render () {
//   return (
//     <>
//     <div className="App">
//       <Navbar name="Lab-WikiCountries" />
//     </div>
      
//       <div className="container">
//       <CountriesList />
      
//       <Switch>
//       <Route path='/:id' component={CountryDetails} />
    
      
//       </Switch>
  
//       </div>


    
//     </>
//   );
//   }
// }

// export default App;
