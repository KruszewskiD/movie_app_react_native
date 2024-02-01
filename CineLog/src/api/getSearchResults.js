

import {API_KEY} from "@env"

const getSearchResults = async (query) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      };

      
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
    
        if (!response.ok) {
          throw new Error(`Network response was not ok. Status: ${response.status}`);
        }
        return await response.json();

      } catch (err) {
        console.error('Error fetching movie list:', err);
        throw err; // Rzuć błąd, aby można było go obsłużyć na wyższym poziomie
      }
}
 
export default getSearchResults;