import {View, ScrollView, Text, Image, ImageBackground} from 'react-native';
import {POPULAR} from '../constants/popular';
import Heading from '../components/Heading';
import {GENRES} from '../constants/genres';
import ButtonComponent from '../components/ButtonComponent';

const MovieDetailScreen = ({route}) => {
  const singleMovie = route.params?.movie;
  return (
    <View style={{flex: 1, backgroundColor: '#34344A'}}>
      <ScrollView>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${singleMovie.backdrop_path}`,
          }}
          style={{height: 300, flexDirection: 'row'}}
          blurRadius={5}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`,
              }}
              style={{
                width: 130,
                height: 195,
                marginTop: 20,
                borderRadius: 10,
              }}></Image>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}></View>
        </ImageBackground>
        <View style={{padding: 10}}>
          <Heading style={{color: '#fff', fontSize: 30}}>
            {singleMovie.title}
          </Heading>
          <ButtonComponent>Mark As Watched</ButtonComponent>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Text>KATEGORIE</Text>
            <Text>{singleMovie.release_date}</Text>
          </View>
          <Text>{singleMovie.overview}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetailScreen;
