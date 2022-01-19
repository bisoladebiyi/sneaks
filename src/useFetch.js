import axios from "axios"

export const fetch = async (url, params = {}) => {
    const options = {
        url,
        method: 'GET',
        params,
        headers: {
          'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
          'x-rapidapi-key': '867cfdd7fbmshc045d91bbfb3aa7p1144d5jsn21d9b8ab1e6b'
        }
    }
      try{
          const response = await axios(options)
          return response
      } catch(error) {
          throw error
      }
      
}