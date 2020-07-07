import React  from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import useFetch from '../hook/useFetch'


function Countries() {
  const [countryDetails ] = useFetch()
  
//Input Search
  const filteredCountry = (inputValue) =>{
    let CountriesName = document.querySelectorAll('.countries-name')

    Array.from(CountriesName)
    .filter(el => !el.textContent.toLowerCase().includes(inputValue))
    .forEach(elm => elm.parentElement.classList.add('filterd'))

    Array.from(CountriesName)
    .filter(el => el.textContent.toLowerCase().includes(inputValue))
    .forEach(elm => elm.parentElement.classList.remove('filterd'))
  }

// Filtered based on region

  const filteredRegion = (selected) =>{
    let regions = document.querySelectorAll('.region')

    Array.from(regions)
    .filter(el => !el.innerHTML.includes(selected))
    .forEach(elm => elm.parentElement.classList.add('filterd'))

    Array.from(regions)
    .filter(el => el.innerHTML.includes(selected))
    .forEach(elm => elm.parentElement.classList.remove('filterd'))
  }

   const countries = Array.from(countryDetails.countryDetails)

  return (
    <div> 
      <div className="CountriesContainer">
       
         <Search countries={filteredCountry} regions={filteredRegion}/>

          <ul className="countries-wrapper">
            {countryDetails.loading? <h1>Please Wait...</h1> : 
            countries.map((con, index) => <li key={index} className="list-items">
                
                  <img src={con.flag} alt="country-flag" className="img-flag"/>
                  <p className="countries-name">
                    <Link to={`/rest-countries-api/${con.name}`} className="activeStyle">{con.name}</Link>
                  </p>      
                  <p><span>Populations:</span> {con.population}</p>
                  <p className="region"><span>Region: </span>{con.region}</p>
                  <p><span>Capital:</span> {con.capital}</p> 
                    
              </li>)
            }
            { countryDetails.error ? countryDetails.error : null}
          </ul>
        </div>
    </div>
  )
}



export default Countries
