import React from 'react';

import { Link } from 'react-router-dom';

import countries from '../countries.json'

class CountriesList extends React.Component {
    

  // componentDidMount() {
  //   fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
  //   .then(res => res.json())
  //   .then((data) => {
  //     this.setState({ countries: data })
  //     console.log(this.state.countries)
  //   })
  //   .catch(console.log)
  // }
    render() {
        return (
            
            <div>
            
                {countries.map((country) => {
                return <p key={country.cca3}><Link to={`/${country.cca3}`} style={{ textDecoration: 'none' }}>{country.flag} {country.name.common}</Link></p>
                                
            })}
            </div>
            
        )
    }
}

export default CountriesList