import {useState, useEffect} from 'react';
import getMovieList from '../api/getMovieList';

export function useMovieLists(categories) {
  const [movieLists, setMovieLists] = useState({});
  const [isDataReady, setIsDataReady] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const promises = categories.map(category => getMovieList(category));
        const results = await Promise.all(promises);
        
        // Creating a new object to hold all category results
        const newMovieLists = {};
        categories.forEach((category, index) => {
          newMovieLists[category] = results[index] || {results: []};
        });

        setMovieLists(newMovieLists);
        setIsDataReady(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [categories]); // Depend on categories to refetch if they change

  return {movieLists, isDataReady};
}
