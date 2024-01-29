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
import React from 'react';
import {GENRES} from '../constants/genres';
import {POPULAR} from '../constants/popular';
import Card from '../components/Card';
import HorizontalMovieList from '../components/HorizontalMovieList';
import YoutubePlayer from 'react-native-youtube-iframe';

const MainScreen = () => {
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
            <YoutubePlayer height={220} play={false} videoId={'U-NH9GFtDs8'} />
          </View>
          <View>
            <HorizontalMovieList
              sectionTitle="Trending"
              moviesData={POPULAR.results}
            />
            <HorizontalMovieList
              sectionTitle="New Release - Movies"
              moviesData={POPULAR.results}
            />
            <HorizontalMovieList
              sectionTitle="New Release - TV Shows"
              moviesData={POPULAR.results}
            />
            <HorizontalMovieList
              sectionTitle="Recommended"
              moviesData={POPULAR.results}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
