import {Pressable, View, Text, StyleSheet} from 'react-native';

const ButtonComponent = ({children, transparent, onPress}) => {
  return (
    <Pressable style={{height: 50, flex: 1}} onPress={onPress}>
      <View
        style={[
          styles.buttonComponent,
          {
            backgroundColor: transparent ? 'transparent' : '#26253A',
            borderWidth: transparent ? 2 : null,
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
  // slideBaner: {
  //   padding: 16,
  //   height: '30%',
  //   justifyContent: 'space-evenly',
  // },
  buttonComponent: {
    flex: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
export default ButtonComponent;
