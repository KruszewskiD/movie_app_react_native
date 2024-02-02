import {View} from 'react-native';
import VerticalMovieList from '../components/VerticalMovieList';
import {POPULAR} from '../constants/popular';
import {useEffect, useState} from 'react';
import {updateAsyncStorage} from '../asyncStorage/updateAsyncStorage';
const RecentlyWatchedScreen = () => {
  const [asyncMovieData, setAsyncMovieData] = useState();

  useEffect(() => {
    // updateAsyncStorage('clearStorage');
    const getRecentlyWatchedData = async key => {
      try {
        const fetchedData = await updateAsyncStorage(key);
        setAsyncMovieData(await fetchedData);
      } catch (error) {
        console.error('Failed to fetch or set movie data:', error);
      }
    };

    getRecentlyWatchedData('watched-movies');
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#34344A',
        flex: 1,
        paddingHorizontal: 16,
      }}>
      <VerticalMovieList movieData={asyncMovieData} />
    </View>
  );
};

export default RecentlyWatchedScreen;
