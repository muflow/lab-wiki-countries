import React from 'react';

import { Link } from 'react-router-dom';

class CountriesList extends React.Component {
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
    render() {
        return (
            
            <div>
            
                {this.state.countries.map((country) => {
                return <p key={country.cca3}><Link to={`/${country.cca3}`} style={{ textDecoration: 'none' }}>{country.flag} {country.name.common}</Link></p>
                                
            })}
            </div>
            
        )
    }
}

export default CountriesList