import {ImageBackground, View, Image} from 'react-native';

const MovieDetailsHeader = ({backdrop, poster}) => {
  return (
    <ImageBackground
      source={{
        uri: `https://image.tmdb.org/t/p/w300/${backdrop}`,
      }}
      style={{height: 300, flexDirection: 'row'}}
      blurRadius={3}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w185/${poster}`,
          }}
          style={{
            width: 130,
            height: 195,
            marginTop: 20,
            borderRadius: 10,
          }}></Image>
      </View>
    </ImageBackground>
  );
};

export default MovieDetailsHeader;
