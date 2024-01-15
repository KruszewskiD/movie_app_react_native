import {View, Text, StyleSheet} from 'react-native';

const SlideBaner = ({slides, activeId}) => {
  return (
    <View style={styles.slideBaner}>
      <Text style={styles.banerTitle}>{slides[activeId - 1].title}</Text>
      <Text style={styles.banerDescription}>
        {slides[activeId - 1].description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  slideBaner: {
    padding: 16,
    height: '30%',
    justifyContent: 'space-evenly',
  },
  banerTitle: {fontSize: 40, color: 'white', letterSpacing: 1},
  banerDescription: {fontSize: 20, color: 'white', fontWeight: '300'},
});
export default SlideBaner;
