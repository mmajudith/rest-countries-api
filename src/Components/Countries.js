import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './Search'


const initialState = {
  loading: true,
  error: '',
  posts: {}
}

function Countries() {

  const [state, setState] = useState(initialState)

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

  //Making HTTP call

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(res => {
      setState({loading: false, error: '', posts: res.data})
    })
    .catch(error =>{
      setState({loading: false, error: "Something went wrong", posts: {}})
    } )

  }, [state])

   const countries = Array.from(state.posts)

  return (
    <div> 
      <div className="CountriesContainer">
       
          <Search countries={filteredCountry} regions={filteredRegion}/>

          <ul className="countries-wrapper">
            {state.loading? <h1>Please Wait...</h1> : 
            countries.map((con, index) => <li key={index} className="list-items">
                  <img src={con.flag} alt="country-flag" className="img-flag"/>
                  <p className="countries-name">{con.name}</p>
                  <p><span>Populations:</span> {con.population}</p>
                  <p className="region"><span>Region: </span>{con.region}</p>
                  <p><span>Capital:</span> {con.capital}</p>        
              </li>)
            }
            { state.error ? state.error : null}
          </ul>
        </div>
    </div>
  )
}



export default Countries
