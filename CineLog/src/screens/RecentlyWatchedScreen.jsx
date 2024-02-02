import {View, Image} from 'react-native';
import VerticalMovieList from '../components/VerticalMovieList';
import {POPULAR} from '../constants/popular';
import {useCallback, useEffect, useState} from 'react';
import {updateAsyncStorage} from '../asyncStorage/updateAsyncStorage';
import {useFocusEffect} from '@react-navigation/native';
const RecentlyWatchedScreen = () => {
  const [asyncMovieData, setAsyncMovieData] = useState();

  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      const getRecentlyWatchedData = async key => {
        try {
          const fetchedData = await updateAsyncStorage(key);
          setAsyncMovieData(await fetchedData);
        } catch (error) {
          console.error('Failed to fetch or set movie data:', error);
        }
      };

      getRecentlyWatchedData('watched-movies');

      return () => {
        isActive = false;
      };
    }, []),
  );

  if (!asyncMovieData) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#34344A',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../assets/NoResultsImage.png')}></Image>
      </View>
    );
  }

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
