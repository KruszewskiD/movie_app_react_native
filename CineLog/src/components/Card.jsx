import {StyleSheet, Text, Image, View, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Card = ({image, data}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        return navigation.navigate('MovieScreen', {movie: data});
      }}>
      <View style={{maxWidth: 100, marginHorizontal: 5}}>
        <Image
          style={{width: 100, height: 150}}
          source={{
            uri: image,
          }}
        />
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({});
