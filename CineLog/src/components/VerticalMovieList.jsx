import FlexContainer from './FlexContainer';
import {Image, Text, View, FlatList} from 'react-native';
import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import VerticalMovieCard from './VerticalMovieCard';
const VerticalMovieList = ({movieData}) => {
  return (
    <FlatList
      data={movieData}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return <VerticalMovieCard movie={item} />;
      }}
      contentContainerStyle={{paddingVertical: 10}}></FlatList>
  );
};

export default VerticalMovieList;
