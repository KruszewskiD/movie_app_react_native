/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

import WelcomeScreen from './src/screens/WelcomeScreen';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <WelcomeScreen></WelcomeScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {},
});

export default App;
