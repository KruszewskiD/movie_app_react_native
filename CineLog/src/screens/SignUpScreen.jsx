import {StyleSheet, Text, View} from 'react-native';
import UserTextInput from '../components/UserTextInput';
import ButtonComponent from '../components/ButtonComponent';
import Heading from '../components/Heading';
import ExternalServices from '../components/ExternalServices';
import AuthToggle from '../components/AuthToggle';
import SplitTextLine from '../components/SplitTextLine';

const SignUpScreen = () => {
  return (
    <View style={styles.signupScreenWrapper}>
      <View style={styles.header}>
        <Heading style={styles.heading}>CineLog</Heading>
        <Text style={styles.headerText}>Please register for an account</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.inputsContainer}>
          <UserTextInput placeholder="E-mail Address" />
          <UserTextInput placeholder="Password" secure />
          <UserTextInput placeholder="Confirm Password" secure />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComponent>Sign-up</ButtonComponent>
        </View>
        <SplitTextLine />
        <ExternalServices />
        <AuthToggle
          question="You have an Account?"
          link={{
            toScreen: 'LoginScreen',
            title: 'Login',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signupScreenWrapper: {
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
  contentContainer: {
    flex: 2,
    gap: 20,
  },
  inputsContainer: {gap: 10},
  buttonContainer: {height: 55},
});

export default SignUpScreen;
