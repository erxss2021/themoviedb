import React from 'react'
import { Text, View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import currencyFormatter from 'currency-formatter';

import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import { colores } from '../themes/appThemes';
import { CastItem } from './CastItem';

interface Props{
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}:Props) => {
  return (
    <>
        {/* Detalles */}
        <View style={{marginHorizontal: 20}}>
            <View style={{flexDirection: 'row'}}>
                <Icon 
                name='star-outline'
                color= {colores.primary}
                size={ 20 }
                /> 
                <Text style={{color: '#000'}}>{movieFull.vote_average}</Text>
                <Text style={{marginLeft: 5, color: '#000'}}>
                      - { movieFull.genres.map(g => g.name).join(', ') }
                </Text>
            </View>
            {/* Historia */}
            <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold', color: '#000'}}>
                Historia: 
            </Text>
            <Text style={{fontSize: 18, color: '#000'}}>
                {movieFull.overview}
            </Text>
            {/* Presupuesto */}
            <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold', color: '#000'}}>
                Presupuesto: 
            </Text>
            <Text style={{fontSize: 20, color: '#000'}}>
                { currencyFormatter.format(movieFull.budget, {code: 'USD'})}
            </Text>
        </View>

        {/* Casting */}
        <View style={{marginHorizontal: 20, marginTop: 10, marginBottom: 100}}>
            <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold', color: '#000'}}>
                Actores: 
            </Text>
            <FlatList 
                data={ cast }
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <CastItem actor={item} />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{marginTop:10, height: 70}}
            />
                {/* <CastItem actor={cast[0]} /> */}
        </View>
    </>
  )
}
