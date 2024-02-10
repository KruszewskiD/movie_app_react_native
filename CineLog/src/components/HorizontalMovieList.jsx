import {StyleSheet, Text, View, Pressable, FlatList} from 'react-native';
import Card from './Card';
import React from 'react';

const HorizontalMovieList = ({sectionTitle, moviesData}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          marginLeft: 15,
          marginVertical: 5,
          textTransform: 'capitalize',
        }}>
        {sectionTitle}
      </Text>
      <View>
        <FlatList
          data={moviesData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 8}}
          renderItem={({item}) => (
            <Pressable>
              <Card
                title={item.original_title}
                data={item}
                image={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
              />
            </Pressable>
          )}
          keyExtractor={item => item.id}
          style={{flexDirection: 'row'}}></FlatList>
      </View>
    </View>
  );
};

export default HorizontalMovieList;

const styles = StyleSheet.create({});
