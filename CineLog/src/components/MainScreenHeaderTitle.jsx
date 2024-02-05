import {useNavigation} from '@react-navigation/native';
import Heading from './Heading';
import {View, Pressable} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const MainScreenHeaderTitle = ({children}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Heading style={{fontSize: 20, color: '#ddd'}}>{children}</Heading>
      <Pressable
        onPress={() => {
          navigation.navigate('Search');
        }}>
        <FeatherIcon name="search" size={30} color="white" />
      </Pressable>
    </View>
  );
};

export default MainScreenHeaderTitle;
