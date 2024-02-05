import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import RecentlyWatchedScreen from '../screens/RecentlyWatchedScreen';
import FavoritesMovieScreen from '../screens/FavoritesMoviesScreen';
import MainScreenHeaderTitle from '../components/MainScreenHeaderTitle';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: '#26253A'}}}>
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <FeatherIcon
              name="home"
              size={20}
              color={focused ? 'white' : '#999'}
              style={{marginHorizontal: 5}}
            />
          ),
          headerStyle: {
            backgroundColor: '#34344A',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: () => {
            return <MainScreenHeaderTitle>Ekran Główny</MainScreenHeaderTitle>;
          },
        }}></Tab.Screen>
      <Tab.Screen
        name="Ostatnio oglądane"
        component={RecentlyWatchedScreen}
        options={{
          headerShown: true,
          tabBarLabel: 'Watched',
          tabBarIcon: ({focused}) => (
            <FeatherIcon
              name="eye"
              size={20}
              color={focused ? 'white' : '#999'}
              style={{marginHorizontal: 5}}
            />
          ),
          headerStyle: {
            backgroundColor: '#34344A',
          },
          headerTintColor: '#ddd',
        }}></Tab.Screen>
      <Tab.Screen
        name="Do obejrzenia"
        component={FavoritesMovieScreen}
        options={{
          headerShown: true,
          tabBarLabel: 'To Watch',
          tabBarIcon: ({focused}) => (
            <FeatherIcon
              name="heart"
              size={20}
              color={focused ? 'white' : '#999'}
            />
          ),
          headerStyle: {
            backgroundColor: '#34344A',
          },
          headerTintColor: '#ddd',
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabs;
