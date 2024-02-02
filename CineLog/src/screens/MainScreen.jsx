import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  FlatList,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GENRES} from '../constants/genres';
import {POPULAR} from '../constants/popular';
import Card from '../components/Card';
import HorizontalMovieList from '../components/HorizontalMovieList';
import YoutubePlayer from 'react-native-youtube-iframe';
import getMovieList from '../api/getMovieList';

const MainScreen = () => {
  const [popularMovies, setPopularMovies] = useState();
  const [nowPlaying, setNowPlaying] = useState();
  const [upcoming, setUpcoming] = useState();
  const [topRated, setTopRated] = useState();
  useEffect(() => {
    const horizontalLists = ['popular', 'now_playing', 'upcoming', 'top_rated'];

    const fetchMovieDetails = async category => {
      try {
        const data = await getMovieList(category);
        switch (category) {
          case 'popular':
            setPopularMovies(data);
            break;
          case 'now_playing':
            setNowPlaying(data);
          case 'upcoming':
            setUpcoming(data);
            break;
          case 'top_rated':
            setTopRated(data);
            break;
        }
      } catch (error) {
        console.error(error);
        // Możesz także ustawić tutaj stan błędu, aby wyświetlić wiadomość użytkownikowi
      }
    };
    horizontalLists.forEach(element => fetchMovieDetails(element));
  }, []);

  if (!topRated) {
    return (
      <View style={{flex: 1}}>
        <Text>Waiting...</Text>
      </View>
    );
  }

  return (
    <View style={{backgroundColor: '#34344A', flex: 1, marginBottom: 0}}>
      <View style={{justifyContent: 'flex-start'}}></View>
      <View style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              marginHorizontal: 13,
              marginTop: 12,
              minHeight: '220',
            }}>
            <YoutubePlayer height={220} play={false} videoId={'1DJYiG6wh0w'} />
          </View>
          <View>
            <HorizontalMovieList
              sectionTitle="Trending"
              moviesData={popularMovies.results}
            />
            <HorizontalMovieList
              sectionTitle="Now Playing"
              moviesData={nowPlaying?.results.reverse()}
            />
            <HorizontalMovieList
              sectionTitle="Upcoming movies"
              moviesData={upcoming.results}
            />
            <HorizontalMovieList
              sectionTitle="Recommended"
              moviesData={topRated.results}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
