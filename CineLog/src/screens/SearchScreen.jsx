import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {POPULAR} from '../constants/popular';
import VerticalMovieList from '../components/VerticalMovieList';

const SearchScreen = ({navigation, route}) => {
  const filterdValue = route.params?.value ? route.params?.value : '';
  return (
    <View
      style={{
        backgroundColor: '#34344A',
        flex: 1,
        padding: 16,
      }}>
      <VerticalMovieList
        movieData={
          !filterdValue
            ? POPULAR.results
            : POPULAR.results.filter(movie =>
                movie.original_title.includes(filterdValue),
              )
        }></VerticalMovieList>
    </View>
  );
};

export default SearchScreen;
