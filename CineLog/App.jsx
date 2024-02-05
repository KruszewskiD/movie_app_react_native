/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

import AuthStack from './src/navigation/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';

import MovieDetailScreen from './src/screens/MovieDetailsScreen';
import NavHeaderSearchComponent from './src/components/NavHeaderSearchComponent';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tab"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerStyle: {
              backgroundColor: '#34344A',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerRight: () => {
              return null;
            },
            headerLeft: () => {
              return null;
            },

            headerTitle: () => {
              return <NavHeaderSearchComponent />;
            },
          }}
        />
        <Stack.Screen
          name="MovieScreen"
          component={MovieDetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {},
});

export default App;
