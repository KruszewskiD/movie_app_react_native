import {
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  Modal,
} from 'react-native';
import Heading from '../components/Heading';
import ButtonComponent from '../components/ButtonComponent';

import LoadingComponent from '../components/LoadingComponent';

import GoBackButton from '../components/GoBackButton';
import MovieGenresList from '../components/MovieGenresList';
import MovieInfoWithIcons from '../components/MovieInfoWithIcons';
import MovieDescription from '../components/MovieDescription';
import MovieDetails from '../components/MovieDetails';
import HorizontalCreditsList from '../components/HorizontalCreditsList';
import {useMovieDetail} from '../hooks/useMovieDetail';
import MovieDetailsHeader from './MovieDetailsHeader';
//const singleMovie = route.params?.movie

const MovieDetailScreen = ({route, navigation}) => {
  const movieId = route.params.movie.id;

  const {
    singleMovie,
    isMarkAsWatched,
    onPressAddToRecentlyWatched,
    isMarkAsFavorite,
    onPressAddToFavoritesMovies,
  } = useMovieDetail(movieId);

  if (!singleMovie) {
    return <LoadingComponent />;
  }

  return (
    <View style={{flex: 1, backgroundColor: '#34344A', position: 'relative'}}>
      <ScrollView
        style={{position: 'relative'}}
        showsVerticalScrollIndicator={false}>
        <GoBackButton navigation={navigation} />

        {/* Header */}
        <MovieDetailsHeader
          backdrop={singleMovie.backdrop_path}
          poster={singleMovie.poster_path}
        />

        <View style={{padding: 10, gap: 10}}>
          <Heading style={{color: '#fff', fontSize: 30}}>
            {singleMovie.title}
          </Heading>

          {/* Genres + Movie Length */}
          <View style={{flexDirection: 'row', flexWrap: true, gap: 5}}>
            <MovieGenresList genresList={singleMovie.genres} />
            <Text style={{color: 'white'}}>{singleMovie.runtime} min</Text>
          </View>

          {/* Movie Info With Icons - Year, Vote1-10, Vote_count */}
          <MovieInfoWithIcons
            release_date={singleMovie.release_date}
            vote_average={singleMovie.vote_average}
            vote_count={singleMovie.vote_count}
          />

          {/* Przyciski  */}
          {/* Mark As Watched */}
          <ButtonComponent
            transparent={isMarkAsWatched}
            onPress={() => {
              onPressAddToRecentlyWatched('watched-movies', {
                id: singleMovie.id,
                original_title: singleMovie.title,
                poster_path: singleMovie.poster_path,
                release_date: singleMovie.release_date,
                vote_average: singleMovie.vote_average,
                runtime: singleMovie.runtime,
                genres: singleMovie.genres,
              });
            }}>
            {!isMarkAsWatched ? 'Mark As Watched' : 'On List'}
          </ButtonComponent>

          {/* Mark As Favorite */}
          <ButtonComponent
            transparent={isMarkAsFavorite}
            onPress={() => {
              onPressAddToFavoritesMovies('favorites-movies', {
                id: singleMovie.id,
                original_title: singleMovie.title,
                poster_path: singleMovie.poster_path,
                release_date: singleMovie.release_date,
                vote_average: singleMovie.vote_average,
                runtime: singleMovie.runtime,
                genres: singleMovie.genres,
              });
            }}>
            {!isMarkAsFavorite ? 'Mark As Favorite' : 'On Favorites List'}
          </ButtonComponent>

          {/* Movie Description */}
          <MovieDescription overview={singleMovie.overview} />

          {/* Movie Detail */}
          <MovieDetails movieData={singleMovie} />

          {/* Cast*/}
          <HorizontalCreditsList credits={singleMovie.credits.cast} />
          {/* Crew*/}
          <HorizontalCreditsList credits={singleMovie.credits.crew} />
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetailScreen;
