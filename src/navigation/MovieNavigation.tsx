import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeMovieScreen } from '../screens/HomeMovieScreen';
import { DetailMovieScreen } from '../screens/DetailMovieScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
  HomeMovieScreen: undefined;
  DetailMovieScreen: Movie;
}

// const Stack = createStackNavigator();
const Stack = createStackNavigator<RootStackParams>();

export const MovieNavigation = () => {

  return (
    <Stack.Navigator
     
      screenOptions={{
        headerShown: false,
        headerStyle:{
          elevation: 0, 
          
        }
        
      }}
    >
      <Stack.Screen name="HomeMovieScreen" component={HomeMovieScreen} />
      <Stack.Screen name="DetailMovieScreen" component={DetailMovieScreen} />
    </Stack.Navigator>
  );
}