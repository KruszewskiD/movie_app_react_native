import {useState} from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';

const ButtonComponent = ({children, transparent, onPress}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={{height: 50, flex: 1}}
      onPress={onPress}
      useForeground
      children>
      <View
        style={[
          styles.buttonComponent,
          {
            backgroundColor: transparent ? 'transparent' : '#26253A',
            borderWidth: transparent ? 2 : null,
            opacity: isPressed ? 0.8 : 1,
          },
        ]}>
        <Text style={{color: 'white', fontFamily: 'Arial', fontSize: 20}}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonComponent: {
    flex: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
export default ButtonComponent;
