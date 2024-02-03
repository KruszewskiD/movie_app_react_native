import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import {Pressable, Text, View} from 'react-native';
import Heading from '../components/Heading';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen';
import {POPULAR} from '../constants/popular';
import VerticalMovieList from '../components/VerticalMovieList';
import RecentlyWatchedScreen from '../screens/RecentlyWatchedScreen';
import MovieDetailScreen from '../screens/MovieDetailsScreen';
import FavoritesMovieScreen from '../screens/FavoritesMoviesScreen';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: '#26253A'}}}>
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerStyle: {
            backgroundColor: '#34344A',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: () => {
            const navigation = useNavigation();
            return (
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Heading style={{fontSize: 20, color: '#ddd'}}>
                  Ekran główny
                </Heading>
                <Pressable
                  onPress={() => {
                    navigation.navigate('Search');
                  }}>
                  <FeatherIcon name="search" size={30} color="white" />
                </Pressable>
              </View>
            );
          },
        }}></Tab.Screen>
      <Tab.Screen
        name="Ostatnio oglądane"
        component={RecentlyWatchedScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#34344A',
          },
          headerTintColor: '#ddd',
        }}></Tab.Screen>
      <Tab.Screen
        name="Ulubione"
        component={FavoritesMovieScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#34344A',
          },
          headerTintColor: '#ddd',
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabs;
