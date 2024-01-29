import {View} from 'react-native';
import VerticalMovieList from '../components/VerticalMovieList';
import {POPULAR} from '../constants/popular';

const RecentlyWatchedScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#34344A',
        flex: 1,
        paddingHorizontal: 16,
      }}>
      <VerticalMovieList movieData={POPULAR.results} />
    </View>
  );
};

export default RecentlyWatchedScreen;
