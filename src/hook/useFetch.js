import { useEffect,useState } from 'react'
import axios from 'axios';

function useFetch() {

    const initialState = {
            loading: true,
            error: '',
            postDetails: {}
      }
      
    const [countryDetails, setCountryDetails] = useState(initialState);
    const getCountryDetails = async () =>{

        try{
  
            const response = await axios.get('https://restcountries.eu/rest/v2/all');
            const data =  response.data
            console.log(data)
            setCountryDetails({loading: false, error: '', postDetails: data})
        
        }catch(err){
            setCountryDetails({loading: false, error: "Something went wrong", postDetails: {}})
        }
    }

    useEffect(() => {

        getCountryDetails();
        
      }, [])
      return [{
          countryDetails: countryDetails.postDetails,
          loading: countryDetails.loading,
          error: countryDetails.error 
      }]
}

export default useFetch

