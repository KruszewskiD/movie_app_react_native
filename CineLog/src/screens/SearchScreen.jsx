import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {POPULAR} from '../constants/popular';
import VerticalMovieList from '../components/VerticalMovieList';
import getSearchResults from '../api/getSearchResults';
import ButtonComponent from '../components/ButtonComponent';
import LoadingComponent from '../components/LoadingComponent';

const SearchScreen = ({navigation, route}) => {
  const filteredValue = route.params?.value ? route.params?.value : '';

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchDelay = setTimeout(async () => {
      if (filteredValue) {
        setSearchResults(await getSearchResults(filteredValue));
      } else if (!filteredValue) {
        setSearchResults([]);
      }
    }, 1000);

    return () => {
      setSearchResults([]);
      clearTimeout(searchDelay);
    };
  }, [JSON.stringify(route.params)]);

  if (searchResults.length == 0 && filteredValue != 0) {
    return <LoadingComponent />;
  }

  return (
    <View
      style={{
        backgroundColor: '#34344A',
        flex: 1,
        padding: 16,
      }}>
      {filteredValue === '' ? (
        // Wyświetlanie popularnych wyników, gdy nic nie jest wpisane
        <VerticalMovieList movieData={POPULAR.results}></VerticalMovieList>
      ) : searchResults?.total_results === 0 ? (
        // Wyświetlanie obrazka, gdy nie ma wyników wyszukiwania
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../assets/NoResultsImage.png')} />
        </View>
      ) : (
        // Wyświetlanie wyników wyszukiwania, gdy są dostępne
        <VerticalMovieList
          movieData={searchResults?.results}></VerticalMovieList>
      )}
    </View>
  );
};

export default SearchScreen;
