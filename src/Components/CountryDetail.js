import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
//import { Link } from 'react-router-dom'
import  useFetch  from '../hook/useFetch'


function CountryDetail() {

  const [countryDetails ] = useFetch()
  const  history  = useHistory();
  const { name } = useParams();
  
  
  //goBack function
  const goBackHandler = () =>{
    history.goBack()
  }

  //Push function
//   const pushHandler = () =>{
// 	  if()
//     history.push(`/rest-countries-api/${name}`)
//   }


  const country = Array.from(countryDetails.countryDetails)
  const findIndex = country.filter(el => el.name === name)
  //console.log(findIndex)
  return (
  
    <div className="countries-det-wrapper">
      	<div className="back-wrapper">
        	<div className="back" onClick={goBackHandler}><FaArrowLeft /> Back</div>
      	</div>
    
      	<div >
           {
            countryDetails.loading? <h1>Please Wait...</h1> :
            findIndex.map((el, index) => <div key={index} className="detail-wrapper">
            <div className="con-flag">
                <img src={el.flag} alt="country flag" height="450" width="550" className="flag-img"/>
            </div>   
            <div className="details">
          		<div className="flex">
            		<div className="bottom">
              			<p className="delName">{el.name}</p>
              			<p><span>Native Name: </span>{el.nativeName}</p>
              			<p><span>Population: </span>{el.population}</p>
              			<p><span>Region: </span>{el.region}</p>
              			<p><span>Sub Region: </span>{el.subregion}</p>
              			<p><span>Capital: </span>{el.capital}</p>
            		</div>
           			<div className="top">
              			<div>
                			<span>Top Level Domain: </span>{el.topLevelDomain.map((top, ind)=> <div key={ind} className="topL">{top}</div>)}
              			</div>
						<div>	   
            	    		<span>Currencies: </span>{el.currencies.map((cur, ind)=> <div key={ind} className="cur">{cur.name}</div>)}
            			</div> 
                		<div>	   
                			<span>Languages: </span>{el.languages.map((lang, ind)=> <div key={ind} className="lang">{lang.name}</div>)}
              			</div> 
            		</div>
          		</div>
          		<div className="borders-wrapper">	   
            		<span className="con-bor">Borders Countries: </span>{el.borders.map((bor, ind)=> <div key={ind} className="borders">{bor}</div>)}
          		</div> 
        	</div> 
			 
            </div>)
           }
            { countryDetails.error ? countryDetails.error : null}
      </div>
    </div>
  )
}

export default CountryDetail
