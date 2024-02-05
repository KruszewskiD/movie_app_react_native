import {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {updateFavoritesList} from '../asyncStorage/updateFavoritesList';

export function useFavorites() {
  const [favoritesList, setFavoritesList] = useState(null);

  const fetchFavorites = useCallback(async () => {
    try {
      const data = await updateFavoritesList('favorites-movies');
      if (data) {
        setFavoritesList(data);
      }
    } catch (error) {
      console.error('Failed to fetch favorites:', error);
    }
  }, []);

  const clearFavorites = useCallback(async () => {
    try {
      await updateFavoritesList('clearStorage');
      setFavoritesList(null); // Clear the state
    } catch (error) {
      console.error('Failed to clear favorites:', error);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      if (isActive) {
        fetchFavorites();
      }

      return () => {
        isActive = false;
      };
    }, [fetchFavorites])
  );

  return {
    favoritesList,
    fetchFavorites,
    clearFavorites,
  };
}
