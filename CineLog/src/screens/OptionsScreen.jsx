import {View, Pressable, Text, ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useRecentlyWatched} from '../hooks/useRecentlyWatched';

const OptionsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#34344A',
      }}>
      <ScrollView>
        {/* Wyloguj się */}
        <Pressable
          style={{
            padding: 15,
            marginHorizontal: 10,
            borderBottomWidth: 1,
            borderColor: 'rgba(150,150,150,0.8)',
          }}
          onPress={() => {
            auth()
              .signOut()
              .then(e => console.log(e));
          }}>
          <Text style={{color: 'white', fontSize: 15}}>Wyloguj się</Text>
        </Pressable>
      </ScrollView>
      {/* <Button
        title="LoggOut"
        onPress={() => {
          auth()
            .signOut()
            .then(e => console.log(e));
        }}></Button> */}
    </View>
  );
};

export default OptionsScreen;
