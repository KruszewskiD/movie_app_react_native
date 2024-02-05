import {Image, Pressable, Text, View} from 'react-native';
import FlexContainer from './FlexContainer';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const VerticalMovieCard = ({movie}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('MovieScreen', {movie: movie})}>
      <FlexContainer
        style={{
          borderWidth: 1,
          borderRadius: 20,
          borderColor: 'white',
          alignItems: 'center',
          flex: 1,
          marginVertical: 5,
          gap: 10,
        }}>
        <Image
          style={{width: 100, height: 150, borderRadius: 20}}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
          }}
        />
        <View style={{flex: 1, gap: 10}}>
          <Text style={{color: 'white', fontSize: 20}} numberOfLines={2}>
            {movie.original_title}
          </Text>
          <FlexContainer style={{gap: 10}}>
            <FlexContainer>
              <FeatherIcon name="calendar" size={15} color="white" />
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                {movie.release_date}
              </Text>
            </FlexContainer>
            <FlexContainer>
              <FeatherIcon name="star" size={15} color="white" />
              <Text style={{color: 'white'}}>
                {movie.vote_average.toFixed(1)}
              </Text>
            </FlexContainer>
          </FlexContainer>
        </View>
      </FlexContainer>
    </Pressable>
  );
};

export default VerticalMovieCard;
