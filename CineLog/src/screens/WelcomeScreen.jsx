import {ImageBackground, StyleSheet, View} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import LinearGradient from 'react-native-linear-gradient';
import IndicatorGroup from '../components/IndicatorGroup';
import {SLIDES} from '../constants/slides';
import SlideBaner from '../components/SlideBaner';
import FlexContainer from '../components/FlexContainer';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/flash_movie.jpeg')}
      style={{flex: 1}}>
      <LinearGradient
        style={{flex: 1}}
        colors={['rgba(0,0,0,0.1)', 'rgb(0,0,0)']}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <SlideBaner slides={SLIDES} activeId={1} />
        </View>
        <IndicatorGroup slides={SLIDES} activeId={1} />
        <FlexContainer style={styles.flexContainer}>
          <ButtonComponent
            transparent
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}>
            Signup
          </ButtonComponent>
          <ButtonComponent
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            Login
          </ButtonComponent>
        </FlexContainer>
      </LinearGradient>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  welcomeScreen: {
    flex: 1,
  },
  flexContainer: {
    justifyContent: 'space-around',
    marginVertical: 40,
    gap: 40,
    marginHorizontal: 16,
  },
});

export default WelcomeScreen;
