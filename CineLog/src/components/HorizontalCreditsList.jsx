import {View, FlatList, Image, Text} from 'react-native';
import Heading from './Heading';
import FeatherIcon from 'react-native-vector-icons/Feather';

const HorizontalCreditsList = ({credits}) => {
  return (
    <View>
      <Heading style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
        Cast:
      </Heading>
      <FlatList
        horizontal
        data={credits}
        keyExtractor={item => item.credit_id}
        renderItem={({item}) => {
          return (
            <View
              style={{
                alignItems: 'center',
                gap: 5,
                width: 85,
              }}>
              {item.profile_path ? (
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w185/${item.profile_path}`,
                  }}
                  style={{width: 50, height: 50, borderRadius: 50}}
                />
              ) : (
                <FeatherIcon name="user" size={50} color="white" />
              )}
              <Text style={{fontSize: 10, color: 'white'}}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default HorizontalCreditsList;
