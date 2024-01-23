import {Image, StyleSheet, Text, View} from 'react-native';

const Service = ({name, imageSource}) => {
  return (
    <View style={styles.service}>
      <Image source={imageSource}></Image>
      <Text style={{color: 'white'}}>{name}</Text>
    </View>
  );
};

const ExternalServices = () => {
  return (
    <View style={styles.externalServices}>
      <Service name="Google" imageSource={require('../assets/Google.png')} />
      <Service name="Apple" imageSource={require('../assets/Apple.png')} />
      <Service
        name="Facebook"
        imageSource={require('../assets/Facebook.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  service: {
    width: 100,
    height: 100,
    backgroundColor: '#26253A',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  externalServices: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ExternalServices;
