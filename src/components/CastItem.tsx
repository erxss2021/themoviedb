import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface'

interface Props{
    actor: Cast;
}

export const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`
  return (
    <View style={styles.container}>
        {
            actor.profile_path && (
                <Image
                    source={{uri}}
                    style={{width: 50, height: 60, borderRadius: 10, paddingLeft: 5}}
                 />
            )
        }
        <View style={styles.actorInfo}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>
                {actor.name}
            </Text>
            <Text style={{ fontSize: 16, opacity: 0.7, color: '#000' }}>
                {actor.character}
            </Text>
        </View>
            
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 7,
        marginRight: 15,
        paddingRight: 10,
    },
    actorInfo:{
        paddingLeft: 10, 
        marginTop: 5,
        marginBottom: 5
    }
})