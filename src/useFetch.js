import axios from "axios"

export const fetch = async (url, params = {}) => {
    const options = {
        url,
        method: 'GET',
        params,
        headers: {
          'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_API_KEY
        }
    }
      try{
          const response = await axios(options)
          return response
      } catch(error) {
          throw error
      }
      
}