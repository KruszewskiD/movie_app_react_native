import {useState} from 'react';
import {TextInput, Text, View, Pressable} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const UserTextInput = ({secure, placeholder, setFunction}) => {
  const [isSecure, setIsSecure] = useState(true);
  return (
    <View
      style={{
        borderBottomWidth: 2,
        borderColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secure ? isSecure : false}
        style={{
          fontSize: 20,
          paddingVertical: 10,
          flex: 1,
          letterSpacing: 1,
          color: '#fff',
        }}
        autoCapitalize="none"
        placeholderTextColor="#bbb"
        onChangeText={value => (setFunction ? setFunction(value) : '')}
      />
      {secure ? (
        <Pressable
          onPress={() => {
            setIsSecure(prevState => !prevState);
          }}>
          {isSecure ? (
            <FeatherIcon
              name="eye"
              size={20}
              color="white"
              style={{marginHorizontal: 5}}
            />
          ) : (
            <FeatherIcon
              name="eye-off"
              size={20}
              color="white"
              style={{marginHorizontal: 5}}
            />
          )}
        </Pressable>
      ) : null}
    </View>
  );
};

export default UserTextInput;
