import React from 'react';
import {View, Text} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const MovieInfoWithIcons = ({release_date, vote_average, vote_count}) => {
  return (
    <View style={{flexDirection: 'row', gap: 10}}>
      <Text style={{color: 'white'}}>
        <FeatherIcon name="calendar" size={15} color="white" />
        {release_date.slice(0, 4)}
      </Text>
      <Text style={{color: 'white'}}>
        <FeatherIcon name="star" size={15} color="white" />
        {vote_average.toFixed(1)}
      </Text>
      <Text style={{color: 'white'}}>{vote_count} reviews</Text>
    </View>
  );
};

export default MovieInfoWithIcons;
