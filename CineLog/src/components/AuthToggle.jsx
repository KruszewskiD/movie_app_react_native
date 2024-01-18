import {Pressable, Text, View} from 'react-native';

const AuthToggle = ({question, link, onPress}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 20}}>{question} </Text>
      <Pressable onPress={onPress}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          {link.title}
        </Text>
      </Pressable>
    </View>
  );
};

export default AuthToggle;
