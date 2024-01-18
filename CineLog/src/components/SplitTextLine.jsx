import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SplitTextLine = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}>
      <View style={{flex: 1, minHeight: 1, backgroundColor: 'white'}}></View>
      <Text style={{color: 'white', fontSize: 20}}>or Login with</Text>
      <View style={{flex: 1, minHeight: 1, backgroundColor: 'white'}}></View>
    </View>
  );
};

export default SplitTextLine;

const styles = StyleSheet.create({});
