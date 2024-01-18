import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import UserTextInput from '../components/UserTextInput';
import ButtonComponent from '../components/ButtonComponent';
import Heading from '../components/Heading';
import ExternalServices from '../components/ExternalServices';
import AuthToggle from '../components/AuthToggle';
import SplitTextLine from '../components/SplitTextLine';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.loginScreenWrapper}>
      {/* Header */}
      <View style={styles.header}>
        <Heading style={styles.heading}>CineLog</Heading>
        <Text style={styles.headerText}>Please login to your account</Text>
      </View>
      {/* Body */}
      <View style={styles.contentWrapper}>
        {/* Input */}
        <View style={styles.inputsWrapper}>
          <UserTextInput placeholder="E-mail Address" />
          <UserTextInput placeholder="Password" secure />
        </View>
        {/* Button */}
        <View style={styles.buttonContainer}>
          <ButtonComponent>Login</ButtonComponent>
        </View>
        {/* Or login with */}
        <SplitTextLine />
        <ExternalServices />
        {/* Sign-up */}
        <AuthToggle
          question="New to CineLog?"
          link={{
            toScreen: 'SignUpScreen',
            title: 'Sign-up',
          }}
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginScreenWrapper: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#34344A',
    gap: 10,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  heading: {color: 'white'},
  headerText: {color: 'white', fontSize: 20},
  contentWrapper: {
    flex: 2,
    gap: 20,
  },
  inputsWrapper: {gap: 10},
  buttonContainer: {height: 55},
});
export default LoginScreen;
