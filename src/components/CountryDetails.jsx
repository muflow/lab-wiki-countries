import React from 'react';


import { Link } from 'react-router-dom';

const allCountries = () => {
    fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
    .then(res => res.json())
    .then((data) => {
      this.setState({ countries: data })
      console.log(this.state.countries)
    })
    .catch(console.log)
  }


  const CountryDetails = (props) => {
      const getCountry = (cca3) => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === cca3;
    }
    return allCountries.find(theCountry)
  };

  const { params } = props.match;
  const foundCountry = getCountry(params.cca3, 10);

  return (
      <div>
          <h2>{foundCountry.name.common}</h2>
          <h3>{foundCountry.region}</h3>
      </div>
  )

  }

export default CountryDetails