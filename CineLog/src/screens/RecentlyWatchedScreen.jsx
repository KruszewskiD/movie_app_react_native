import {View, Image, Text, Pressable} from 'react-native';
import VerticalMovieList from '../components/VerticalMovieList';
import {useRecentlyWatched} from '../hooks/useRecentlyWatched';
import Heading from '../components/Heading';
import FlexContainer from '../components/FlexContainer';
import {mostFrequentElement} from '../helpers/mostFrequentElement';

const RecentlyWatchedScreen = () => {
  const {recentlyWatched, clearRecentlyWatched} = useRecentlyWatched();

  if (!recentlyWatched) {
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
      <View
        style={{
          marginTop: 16,
          height: 150,
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 20,
          padding: 10,
        }}>
        <Heading style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
          Podsumowanie
        </Heading>
        <FlexContainer>
          <Text style={{color: 'white', width: 150}}>Czas oglądania: </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            {recentlyWatched.reduce((acc, movie) => {
              return acc + movie.runtime;
            }, 0)}{' '}
            min
          </Text>
        </FlexContainer>
        <FlexContainer>
          <Text style={{color: 'white', width: 150}}>Filmy: </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            {recentlyWatched.length}
          </Text>
        </FlexContainer>
        <FlexContainer>
          <Text style={{color: 'white', width: 150}}>Śr. Czas:</Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            {(
              recentlyWatched.reduce((acc, movie) => {
                return acc + movie.runtime;
              }, 0) / recentlyWatched.length
            ).toFixed()}{' '}
            min
          </Text>
        </FlexContainer>
        <FlexContainer>
          <Text style={{color: 'white', width: 150}}>Ulubiony gatunek: </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            {mostFrequentElement(
              recentlyWatched
                .map(element => {
                  return element.genres.map(genre => genre.name);
                })
                .flat(),
            )}
          </Text>
        </FlexContainer>
      </View>
      <VerticalMovieList movieData={recentlyWatched} />
    </View>
  );
};

export default RecentlyWatchedScreen;
