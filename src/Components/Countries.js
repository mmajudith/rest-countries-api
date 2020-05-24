import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Styles/Countries.style.scss'

const initialState = {
  loading: true,
  error: '',
  posts: {}
}

function Countries() {

  const [state, setState] = useState(initialState)

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
      <div className="search">
          <div>
              <input type="text" placeholder= "Search for a country..."/>
          </div>
          <div>
              <select>
                <option>Filter by Region</option>
                <option>Africa</option>
                <option>America</option>
                <option>Europe</option>
                <option>Oceania</option>
              </select>
          </div>
        </div>
        <div className="countries-wrapper">
          {state.loading? <h1>Please Wait...</h1> : 
          countries.map((con, index) => <div key={index} className="list-items">
                <img src={con.flag} alt="country-flag" className="img-flag"/>
                <div className="items">
                  <p className="countries-name">{con.name}</p>
                  <p><span>Populations:</span> {con.population}</p>
                  <p><span>Region: </span>{con.region}</p>
                  <p><span>Capital:</span> {con.capital}</p>
                </div>
            </div>)
          }
          { state.error ? state.error : null}
        </div>
    </div>
  )
}



export default Countries
