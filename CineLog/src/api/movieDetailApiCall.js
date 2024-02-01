import {API_KEY} from "@env"





export const movieDetailsApiCall = async (movieId) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };
  
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits&language=pl-PL`, options);

    if (!response.ok) {
      throw new Error(`Network response was not ok. Status: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error('Error fetching movie details:', err);
    throw err; // Rzuć błąd, aby można było go obsłużyć na wyższym poziomie
  }
};
  
