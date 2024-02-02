import {
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import {POPULAR} from '../constants/popular';
import Heading from '../components/Heading';
import ButtonComponent from '../components/ButtonComponent';
import {MOVIE} from '../constants/movie';
import {FlatList} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useEffect, useState} from 'react';
import {movieDetailsApiCall} from '../api/movieDetailApiCall';
import {filterUnique} from '../helpers/filterUnique';
import {updateAsyncStorage} from '../asyncStorage/updateAsyncStorage';
import LoadingComponent from '../components/LoadingComponent';
//const singleMovie = route.params?.movie

const MovieDetailScreen = ({route, navigation}) => {
  const [singleMovie, setSingleMovie] = useState();
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await movieDetailsApiCall(route.params.movie.id);
        setSingleMovie(data);
        console.log('------------' + data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [route.params.movieId]);

  const onPressAddToRecentlyWatched = async (key, value) => {
    await updateAsyncStorage(key, value);
  };

  if (!singleMovie) {
    return <LoadingComponent />;
  }

  return (
    <View style={{flex: 1, backgroundColor: '#34344A'}}>
      <ScrollView
        style={{position: 'relative'}}
        showsVerticalScrollIndicator={false}>
        <Pressable
          style={{
            position: 'absolute',
            top: 50,
            left: 20,
            zIndex: 3,
            backgroundColor: '#34344A',
            borderRadius: 50,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <FeatherIcon name="arrow-left" size={30} color="white" />
        </Pressable>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${singleMovie.backdrop_path}`,
          }}
          style={{height: 300, flexDirection: 'row'}}
          blurRadius={5}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`,
              }}
              style={{
                width: 130,
                height: 195,
                marginTop: 20,

                borderRadius: 10,
              }}></Image>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable
              style={{
                backgroundColor: 'red',
                padding: 20,
                borderRadius: 50,
              }}>
              <FeatherIcon name="youtube" size={50} color="white" />
            </Pressable>
          </View>
        </ImageBackground>
        <View style={{padding: 10, gap: 10}}>
          <Heading style={{color: '#fff', fontSize: 30}}>
            {singleMovie.title}
          </Heading>

          <View style={{flexDirection: 'row', gap: 5}}>
            {singleMovie.genres.map(element => (
              <View
                key={element.id}
                style={{
                  backgroundColor: 'white',
                  paddingHorizontal: 5,
                  borderRadius: 10,
                }}>
                <Text>{element.name}</Text>
              </View>
            ))}
            <Text style={{color: 'white'}}>{singleMovie.runtime} min</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Text style={{color: 'white'}}>
              <FeatherIcon name="calendar" size={15} color="white" />
              {singleMovie.release_date.slice(0, 4)}
            </Text>
            <Text style={{color: 'white'}}>
              <FeatherIcon name="star" size={15} color="white" />
              {singleMovie.vote_average.toFixed(1)}
            </Text>
            <Text style={{color: 'white'}}>450k reviews</Text>
          </View>
          <ButtonComponent
            onPress={() => {
              onPressAddToRecentlyWatched('watched-movies', {
                id: singleMovie.id,
                original_title: singleMovie.title,
                poster_path: singleMovie.poster_path,
                release_date: singleMovie.release_date,
                vote_average: singleMovie.vote_average,
              });
            }}>
            Mark As Watched
          </ButtonComponent>
          <Heading style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
            Description:
          </Heading>
          <Text style={{color: 'white', letterSpacing: 1, fontSize: 20}}>
            {singleMovie.overview}
          </Text>
          {/* DETAILS LIST WITH FIXED WIDTH */}
          <Heading style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
            Details:
          </Heading>
          {/* SINGLE DETAIL */}
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                width: 140,
                fontSize: 20,
                fontWeight: 700,
                color: 'white',
              }}>
              Country:
            </Text>
            <Text style={{fontSize: 20, color: 'white'}}>
              {filterUnique(
                singleMovie.production_companies.map(
                  element => element.origin_country,
                ),
              ).join(', ')}
            </Text>
          </View>
          {/* SINGLE DETAIL */}
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                width: 140,
                fontSize: 20,
                fontWeight: 700,
                color: 'white',
              }}>
              Genre:
            </Text>
            <Text style={{fontSize: 20, color: 'white', flex: 1}}>
              {singleMovie.genres.map(element => element.name).join(', ')}
            </Text>
          </View>
          {/* SINGLE DETAIL */}
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                width: 140,
                fontSize: 20,
                fontWeight: 700,
                color: 'white',
              }}>
              Date Release:
            </Text>
            <Text style={{fontSize: 20, color: 'white'}}>
              {singleMovie.release_date}
            </Text>
          </View>
          {/* SINGLE DETAIL */}
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                width: 140,
                fontSize: 20,
                fontWeight: 700,
                color: 'white',
              }}>
              Production:
            </Text>
            <Text
              style={{fontSize: 20, color: 'white', flex: 1}}
              numberOfLines={3}>
              {singleMovie.production_companies
                .map(element => element.name)
                .join(', ')}
            </Text>
          </View>

          {/* Cast*/}
          <View>
            <Heading style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
              Cast:
            </Heading>
            <FlatList
              horizontal
              data={singleMovie.credits.cast}
              keyExtractor={item => item.credit_id}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      alignItems: 'center',
                      gap: 5,
                      width: 85,
                    }}>
                    {item.profile_path ? (
                      <Image
                        source={{
                          uri: `https://image.tmdb.org/t/p/w500/${item.profile_path}`,
                        }}
                        style={{width: 50, height: 50, borderRadius: 50}}
                      />
                    ) : (
                      <FeatherIcon name="user" size={50} color="white" />
                    )}
                    <Text style={{fontSize: 10, color: 'white'}}>
                      {item.name}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
          {/* Crew*/}
          <View>
            <Heading style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
              Crew:
            </Heading>
            <FlatList
              horizontal
              data={singleMovie.credits.crew}
              keyExtractor={item => item.credit_id}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      alignItems: 'center',
                      gap: 5,
                      width: 85,
                    }}>
                    {item.profile_path ? (
                      <Image
                        source={{
                          uri: `https://image.tmdb.org/t/p/w500/${item.profile_path}`,
                        }}
                        style={{width: 50, height: 50, borderRadius: 50}}
                      />
                    ) : (
                      <FeatherIcon name="user" size={50} color="white" />
                    )}
                    <Text style={{fontSize: 10, color: 'white'}}>
                      {item.name}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetailScreen;
