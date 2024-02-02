import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GENRES} from '../constants/genres';
import {POPULAR} from '../constants/popular';
import Card from '../components/Card';
import HorizontalMovieList from '../components/HorizontalMovieList';
import YoutubePlayer from 'react-native-youtube-iframe';
import getMovieList from '../api/getMovieList';
import LoadingComponent from '../components/LoadingComponent';

const MainScreen = () => {
  const [popularMovies, setPopularMovies] = useState();
  const [nowPlaying, setNowPlaying] = useState();
  const [upcoming, setUpcoming] = useState();
  const [topRated, setTopRated] = useState();
  const [isDataReady, setIsDataReady] = useState(false);
  useEffect(() => {
    const horizontalLists = ['popular', 'now_playing', 'upcoming', 'top_rated'];
    const fetchMovieDetails = async () => {
      try {
        // Tworzenie promisów dla wszystkich zapytań
        const promises = horizontalLists.map(category =>
          getMovieList(category),
        );
        // Oczekiwanie na zakończenie wszystkich promisów
        const results = await Promise.all(promises);

        // Aktualizacja stanów na podstawie wyników
        setPopularMovies(results[0] || {results: []});
        setNowPlaying(results[1] || {results: []});
        setUpcoming(results[2] || {results: []});
        setTopRated(results[3] || {results: []});

        setIsDataReady(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, []);

  if (!isDataReady) {
    return <LoadingComponent />;
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
            <YoutubePlayer
              height={220}
              play={false}
              videoId={'1DJYiG6wh0w'}
              onChangeState={state => {
                console.log(state);
              }}
            />
          </View>
          <View>
            <HorizontalMovieList
              sectionTitle="Trending"
              moviesData={popularMovies.results}
            />
            <HorizontalMovieList
              sectionTitle="Now Playing"
              moviesData={nowPlaying.results}
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
