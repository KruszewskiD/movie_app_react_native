/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';

import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import AuthStack from './src/navigation/AuthStack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import Heading from './src/components/Heading';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-gesture-handler';
import {Text} from 'react-native';
import MovieDetailScreen from './src/screens/MovieDetailsScreen';
const Stack = createStackNavigator();

function App() {
  return (
    <View style={{flex: 1}}>
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
                const navigation = useNavigation();
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      flex: 1,
                      backgroundColor: 'transparent',
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderWidth: 1,
                      borderRadius: 20,
                      borderColor: '#aaa',
                      overflow: 'scroll',
                      padding: 10,
                    }}>
                    <Pressable onPress={() => navigation.goBack()}>
                      <FeatherIcon
                        name="arrow-left"
                        size={20}
                        color="white"
                        style={{marginHorizontal: 5}}
                      />
                    </Pressable>
                    <TextInput
                      placeholder="Search for movie..."
                      placeholderTextColor={'#aaa'}
                      style={{flex: 1, color: 'white'}}
                      onChangeText={value => {
                        navigation.setParams({
                          value: value,
                        });
                      }}></TextInput>
                    <Pressable>
                      <FeatherIcon
                        name="search"
                        size={20}
                        color="white"
                        style={{marginHorizontal: 5}}
                      />
                    </Pressable>
                  </View>
                );
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
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {},
});

export default App;
