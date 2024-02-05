import {Text, View} from 'react-native';

const MovieGenresList = ({genresList}) => {
  return (
    <>
      {genresList.map(element => (
        <View
          key={element.id}
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 5,
            borderRadius: 10,
          }}>
          <Text>{element.name}</Text>
        </View>
      ))}
    </>
  );
};

export default MovieGenresList;
