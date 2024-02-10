import {View, Image, Text, Pressable} from 'react-native';
import VerticalMovieList from '../components/VerticalMovieList';
import {useFavorites} from '../hooks/useFavorites';

const FavoritesMovieScreen = () => {
  const {favoritesList, clearFavorites} = useFavorites();

  if (!favoritesList) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#34344A',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../assets/NoResultsImage.png')}></Image>
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: '#34344A',
        flex: 1,
        paddingHorizontal: 16,
        position: 'relative',
      }}>
      {/* <Pressable
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          height: 50,
          width: 50,
          backgroundColor: 'red',
          zIndex: 1,
        }}
        onPress={clearFavorites}>
        <Text>X</Text>
      </Pressable> */}
      <VerticalMovieList movieData={favoritesList} />
    </View>
  );
};

export default FavoritesMovieScreen;
