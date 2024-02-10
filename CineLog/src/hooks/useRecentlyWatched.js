import {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {updateAsyncStorage} from '../asyncStorage/updateAsyncStorage';

export function useRecentlyWatched() {
  const [recentlyWatched, setRecentlyWatched] = useState(null);

  const fetchRecentlyWatched = useCallback(async () => {
    try {
      const data = await updateAsyncStorage('watched-movies');
      if (data) {
        setRecentlyWatched(data);
      }
    } catch (error) {
      console.error('Failed to fetch recently watched:', error);
    }
  }, []);

  const clearRecentlyWatched = useCallback(async () => {
    try {
      await updateAsyncStorage('clearStorage'); // Assuming `updateAsyncStorage` supports a clear operation
      setRecentlyWatched(null); // Clear the state
    } catch (error) {
      console.error('Failed to clear recently watched:', error);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      if (isActive) {
        fetchRecentlyWatched();
      }

      return () => {
        isActive = false;
      };
    }, [fetchRecentlyWatched])
  );

  return {
    recentlyWatched,
    clearRecentlyWatched,
  };
}
