import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {View, TextInput} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const NavHeaderSearchComponent = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'transparent',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#aaa',
        overflow: 'scroll',
        padding: 10,
      }}>
      <Pressable onPress={() => navigation.goBack()}>
        <FeatherIcon
          name="arrow-left"
          size={20}
          color="white"
          style={{marginHorizontal: 5}}
        />
      </Pressable>
      <TextInput
        placeholder="Search for movie..."
        placeholderTextColor={'#aaa'}
        style={{flex: 1, color: 'white'}}
        onChangeText={value => {
          navigation.setParams({
            value: value,
          });
        }}></TextInput>
      <Pressable>
        <FeatherIcon
          name="search"
          size={20}
          color="white"
          style={{marginHorizontal: 5}}
        />
      </Pressable>
    </View>
  );
};

export default NavHeaderSearchComponent;
