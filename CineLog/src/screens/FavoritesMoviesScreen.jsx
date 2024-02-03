import {View, Image, Text, Pressable} from 'react-native';
import VerticalMovieList from '../components/VerticalMovieList';
import {POPULAR} from '../constants/popular';
import {useCallback, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {updateFavoritesList} from '../asyncStorage/updateFavoritesList';
const FavoritesMovieScreen = () => {
  const [asyncMovieData, setAsyncMovieData] = useState();

  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      const getRecentlyWatchedData = async key => {
        try {
          const fetchedData = await updateFavoritesList(key);
          setAsyncMovieData(await fetchedData);
        } catch (error) {
          console.error('Failed to fetch or set movie data:', error);
        }
      };

      getRecentlyWatchedData('favorites-movies');

      return () => {
        isActive = false;
      };
    }, []),
  );

  const onPressClearHandler = () => {
    updateFavoritesList('clearStorage');
  };

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
        position: 'relative',
      }}>
      <Pressable
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          height: 50,
          width: 50,
          backgroundColor: 'red',
          zIndex: 1,
        }}
        onPress={onPressClearHandler}>
        <Text>X</Text>
      </Pressable>
      <VerticalMovieList movieData={asyncMovieData} />
    </View>
  );
};

export default FavoritesMovieScreen;
