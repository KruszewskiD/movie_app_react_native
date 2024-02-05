import {Pressable} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
const GoBackButton = ({navigation}) => {
  return (
    <Pressable
      style={{
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 3,
        backgroundColor: '#34344A',
        borderRadius: 50,
      }}
      onPress={() => {
        navigation.goBack();
      }}>
      <FeatherIcon name="arrow-left" size={30} color="white" />
    </Pressable>
  );
};

export default GoBackButton;
