import {StyleSheet, View} from 'react-native';

const Indicator = ({active}) => {
  return (
    <View
      style={[
        styles.indicator,
        {backgroundColor: active ? 'red' : 'white'},
      ]}></View>
  );
};

const IndicatorGroup = ({slides, activeId}) => {
  return (
    <View style={styles.indicatorGroup}>
      {slides.map(slide => {
        return (
          <Indicator key={slide.id} active={slide.id == activeId}></Indicator>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    width: 40,
    height: 5,
    borderRadius: 5,
  },
  indicatorGroup: {
    padding: 30,
    justifyContent: 'center',
    gap: 20,
    flexDirection: 'row',
  },
});

export default IndicatorGroup;
