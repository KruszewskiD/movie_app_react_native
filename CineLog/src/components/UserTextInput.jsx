import {useState} from 'react';
import {TextInput, Text, View, Pressable} from 'react-native';

const UserTextInput = ({secure, placeholder}) => {
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
      />
      {secure ? (
        <Pressable
          onPress={() => {
            setIsSecure(prevState => !prevState);
          }}>
          <Text style={{color: '#fff'}}>O</Text>
        </Pressable>
      ) : null}
    </View>
  );
};

export default UserTextInput;
