import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Reusable Detail Item Component
const MovieDetailItem = ({label, value}) => (
  <View style={styles.detailContainer}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

// Stylesheet
const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 10, // Add some space between detail items
  },
  label: {
    width: 140,
    fontSize: 20,
    fontWeight: 'bold', // Adjusted to 'bold' as numeric value might not be interpreted correctly
    color: 'white',
  },
  value: {
    fontSize: 20,
    color: 'white',
    flex: 1, // Ensure value text uses remaining space
    flexWrap: 'wrap', // Allow wrapping for long content
  },
});

export default MovieDetailItem;
