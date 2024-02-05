import {useState, useEffect} from 'react';
import {movieDetailsApiCall} from '../api/movieDetailsApiCall';
import {updateAsyncStorage} from '../asyncStorage/updateAsyncStorage';
import {updateFavoritesList} from '../asyncStorage/updateFavoritesList';

export function useMovieDetail(movieId) {
  const [singleMovie, setSingleMovie] = useState(null);
  const [isMarkAsWatched, setIsMarkAsWatched] = useState(false);
  const [isMarkAsFavorite, setIsMarkAsFavorite] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const asyncStorageData = await updateAsyncStorage('watched-movies');
        const favoritesAsyncStorage = await updateFavoritesList('favorites-movies');
        
        setIsMarkAsWatched(asyncStorageData?.some(element => element.id === movieId));
        setIsMarkAsFavorite(favoritesAsyncStorage?.some(element => element.id === movieId));

        const data = await movieDetailsApiCall(movieId);
        setSingleMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const onPressAddToRecentlyWatched = async (key, movie) => {
    if (!isMarkAsWatched) {
      await updateAsyncStorage(key, movie);
      setIsMarkAsWatched(true);
    }
  };

  const onPressAddToFavoritesMovies = async (key, movie) => {
    if (!isMarkAsFavorite) {
      await updateFavoritesList(key, movie);
      setIsMarkAsFavorite(true);
    }
  };

  return {
    singleMovie,
    isMarkAsWatched,
    onPressAddToRecentlyWatched,
    isMarkAsFavorite,
    onPressAddToFavoritesMovies,
  };
}
