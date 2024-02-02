import {View, ActivityIndicator} from 'react-native';

const LoadingComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#34344A',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator />
    </View>
  );
};

export default LoadingComponent;
