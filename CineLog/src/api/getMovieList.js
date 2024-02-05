import {API_KEY} from "@env"

const getMovieList = async (category) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?language=pl-PL&page=1`, options);
        if (!response.ok) {
          throw new Error(`Network response was not ok. Status: ${response.status}`);
        }
    
        return await response.json();
      } catch (err) {
        console.error('Error fetching movie list:', err);
        throw err; // Rzuć błąd, aby można było go obsłużyć na wyższym poziomie
      }
}
 
export default getMovieList;