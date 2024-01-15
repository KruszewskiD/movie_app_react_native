import {StyleSheet, View} from 'react-native';

const FlexContainer = ({children, style}) => {
  return <View style={[styles.flexContainer, style]}>{children}</View>;
};

export default FlexContainer;
const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
  },
});
