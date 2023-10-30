import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';


import { RootStackParams } from '../navigation/MovieNavigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon  from 'react-native-vector-icons/Ionicons';
import { colores } from '../themes/appThemes';

const screenHeight = Dimensions.get('screen').height; 

interface Props extends StackScreenProps<RootStackParams, 'DetailMovieScreen'>{}



export const DetailMovieScreen = ({route, navigation}: Props) => {

  const movie = route.params;
  
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, movieFull, cast} = useMovieDetails(movie.id);

  // console.log({cast});

  return (
    <ScrollView >
      <View style={styles.imageBorder}>
        <View style={styles.imageContainer}>
            <Image 
              source={{uri}}   
              style={styles.posterImage}     
            />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      <View style={{marginTop: 20}}>
        {
          isLoading ? <ActivityIndicator size={50} color='green' /> 
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
        }
      </View>
      {/* Boton para cerrar */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.pop()}
      >
        <Icon 
          name='caret-back-outline'
          color= {colores.primary}
          size={ 60 }
          
        />
      </TouchableOpacity>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  imageBorder:{
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  imageContainer:{
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    
  },
  posterImage: {
    flex: 1,
    
  },
  marginContainer:{
    marginHorizontal: 20,
    marginTop: 20
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  subtitle:{
    fontSize: 18,
    opacity: 0.7,
    color: 'black'
  },
  backButton:{
    position: 'absolute',
    top: 10,
    elevation: 9
  }
})