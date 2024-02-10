import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import UserTextInput from '../components/UserTextInput';
import ButtonComponent from '../components/ButtonComponent';
import Heading from '../components/Heading';
import ExternalServices from '../components/ExternalServices';
import AuthToggle from '../components/AuthToggle';
import SplitTextLine from '../components/SplitTextLine';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';
const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const signUpFn = () => {
    if (password !== confirmPassword) {
      Alert.alert('Password Are not the same!');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        Alert.alert(e.nativeErrorMessage);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.signupScreenWrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
      <Pressable style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
        {/* Header */}
        <View style={styles.header}>
          <Heading style={styles.heading}>CineLog</Heading>
          <Text style={styles.headerText}>Please register for an account</Text>
        </View>
        {/* Body */}
        <View style={styles.contentContainer}>
          {/* Input */}
          <View style={styles.inputsContainer}>
            <UserTextInput
              placeholder="E-mail Address"
              setFunction={setEmail}
            />
            <UserTextInput
              placeholder="Password"
              secure
              setFunction={setPassword}
            />
            <UserTextInput
              placeholder="Confirm Password"
              secure
              setFunction={setConfirmPassword}
            />
          </View>
          {/* Button */}
          <View style={styles.buttonContainer}>
            <ButtonComponent onPress={signUpFn}>Sign-up</ButtonComponent>
          </View>
          {/* Or login with */}
          <SplitTextLine />
          <ExternalServices />
          {/* Sign-up */}
          <AuthToggle
            question="You have an Account?"
            link={{
              toScreen: 'LoginScreen',
              title: 'Login',
            }}
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
          />
        </View>
      </Pressable>
    </KeyboardAvoidingView>
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
