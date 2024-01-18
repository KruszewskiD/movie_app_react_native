import {Text, StyleSheet} from 'react-native';
const Heading = ({style, children}) => {
  return <Text style={[styles.banerTitle, {...style}]}>{children}</Text>;
};
const styles = StyleSheet.create({
  banerTitle: {fontSize: 40, letterSpacing: 1},
});
export default Heading;
