import { StackScreenProps } from '@react-navigation/stack';
import React  from 'react'
import { View, Dimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import { useMovies } from '../hooks/useMovies';
import { ActivityIndicator } from 'react-native';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';

interface Props extends StackScreenProps<any, any>{};

const { width: windowWidth } = Dimensions.get('window'); 

export const HomeMovieScreen = ({navigation}: Props) => {


  //cuando entremos a HomeMovieScreen, disparamos un useEffect, transformar en un hook
  const {nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if(isLoading){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color='red' size={100}/>
      </View>
    )
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
            {/* Carrusel principal */}
            <View style={{ height: 440 }}>
              <Carousel 
                data={nowPlaying}
                renderItem={({item}: any) => <MoviePoster movie={item} />}
                sliderWidth={windowWidth}
                itemWidth={300}
                inactiveSlideOpacity={0.9}
              />
            </View>
            <HorizontalSlider title='Popular' movies={popular}/>
            <HorizontalSlider title='Top Rated' movies={topRated}/>
            <HorizontalSlider title='Upcoming' movies={upcoming}/>
        </View>
      </ScrollView>
    </GradientBackground>
  )
}
