//@ts-nocheck
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/MovieNavigation';


interface Props{
    movie: Movie;
    height?: number;
    width?: number
}

//type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'DetailMovieScreen'>

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    // const navigation = useNavigation<HomeScreenNavigationProp>();
    const navigation = useNavigation();
  return (      
    <TouchableOpacity 
        onPress={() => navigation.navigate('DetailMovieScreen', movie)} //'DetailMovieScreen' as never, movie as never
        activeOpacity={0.8}
        style={{
            height, 
            width, 
            marginHorizontal: 2,
            paddingBottom: 20,
            paddingHorizontal: 7
        }}
    >
        <View style={style.containerCard}>
            <Image 
                source={{
                    uri
                }}
                style={style.image}
            />
        </View>
        
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    containerCard:{
        flex: 1,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    }, 
    image: {
        flex: 1,
        borderRadius: 20
    }
});