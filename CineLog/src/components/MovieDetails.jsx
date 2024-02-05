import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Heading from './Heading';
import MovieDetailItem from './MovieDetailItem';

const MovieDetails = ({movieData}) => {
  // Utility function to filter and join unique values
  const joinUnique = (array, key) => {
    return [...new Set(array.map(item => item[key]))].join(', ');
  };

  return (
    <View>
      <Heading style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
        Details:
      </Heading>

      <MovieDetailItem
        label="Country"
        value={joinUnique(movieData.production_companies, 'origin_country')}
      />

      <MovieDetailItem
        label="Genre"
        value={movieData.genres.map(element => element.name).join(', ')}
      />

      <MovieDetailItem label="Date Release" value={movieData.release_date} />

      <MovieDetailItem
        label="Production"
        value={joinUnique(movieData.production_companies, 'name')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20, // Add some space below the heading
  },
});

export default MovieDetails;
