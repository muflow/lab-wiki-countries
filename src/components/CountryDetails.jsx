import React from 'react';

import { Link } from 'react-router-dom';

import countries from '../countries.json';

const CountryDetails = (props) => {
  console.log(props);

  const getCountry = (cca3) => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === cca3;
    }
    return countries.find(theCountry)
  };
  
  const { params } = props.match;
  const foundCountry = getCountry(params.id, 10);

  return(
    <div>
    <h2>{foundCountry.name.common}</h2>
    <p>Capital: {foundCountry.capital}</p>
    <p>Area: {foundCountry.area} Km²</p>
    
    <ul> Borders:
      {foundCountry.borders.map((border) => {
        return (
          <Link to={`/${border}`}><li style={{ listStyleType: 'none' }}>{border}</li></Link>
        )
      })}
    </ul>
    </div>
  )
}

export default CountryDetails


















// const countryDetails = (props) => {
//   console.log(props);

//   return(
//     <div>this is the CountryDetails component</div>
//   )
// }

// export default countryDetails











// const allCountries= []



//   const CountryDetails = (props) => {
//       const getCountry = (cca3) => {
//     const theCountry = oneCountry => {
//       return oneCountry.cca3 === cca3;
//     }
//     return allCountries.find(theCountry)
//   };

//   const { params } = props.match;
//   const foundCountry = getCountry(params.cca3, 10);

//   return (
//       <div>
//           <h2>{foundCountry.name.common}</h2>
//           <h3>{foundCountry.region}</h3>
//       </div>
//   )

//   }

// export default CountryDetails