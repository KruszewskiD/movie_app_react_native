import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GENRES} from '../constants/genres';
import {POPULAR} from '../constants/popular';
import Card from '../components/Card';
import HorizontalMovieList from '../components/HorizontalMovieList';
import YoutubePlayer from 'react-native-youtube-iframe';
import getMovieList from '../api/getMovieList';
import LoadingComponent from '../components/LoadingComponent';
import {useMovieLists} from '../hooks/useMovieLists';

const MainScreen = () => {
  const categories = ['popular', 'now_playing', 'upcoming', 'top_rated'];
  const {movieLists, isDataReady} = useMovieLists(categories);

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
            <YoutubePlayer height={220} play={false} videoId={'1DJYiG6wh0w'} />
          </View>
          {categories.map(category => (
            <HorizontalMovieList
              key={category}
              sectionTitle={category.replace('_', ' ')}
              moviesData={movieLists[category].results}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
