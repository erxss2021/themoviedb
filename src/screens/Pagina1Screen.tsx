import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
// import { DrawerScreenProps } from '@react-navigation/drawer';
import { colores, styles } from '../themes/appThemes';

interface Props extends StackScreenProps<any, any>{};
// interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ({navigation}: Props) => {

    // useEffect(() => {
    //     navigation.setOptions({
    //         headerLeft: () => (
    //             <Button 
    //                 title='Menú'
    //                 onPress={() => {navigation.toggleDrawer()}}
    //             />
    //         )
    //     })
    // }, [])
    

  return (
    <View style = {styles.marginGlobal}>
        <Text style = {styles.title}>Pagina1Screen</Text>

        <Button 
            title="Ir pagina 2"
            onPress = {() => navigation.navigate('Pagina2Screen')}
        />

        <Text style={{
            marginLeft: 5,
            marginVertical: 20,
            fontSize: 20
        }}>Navegar con argumentos</Text>
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
                onPress={() => navigation.navigate('PersonaScreen', {
                    id: 1,
                    nombre: 'Eloy'
                })}
                style={{
                    ...styles.botonGrande,
                    backgroundColor: '#5856D6'
                }}
            >
                <Text>
                    <Icon name="man-outline" size={30} color='white' />
                </Text>
                <Text style={styles.textoBoton}>Hombre</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('PersonaScreen', {
                    id: 2,
                    nombre: 'Renata'
                })}
                style={{
                    ...styles.botonGrande,
                    backgroundColor: '#FF9427'
                }}
            >
                <Text>
                    <Icon name="woman-outline" size={30} color='white' />
                </Text>
                <Text style={styles.textoBoton}>Mujer</Text>
            </TouchableOpacity>
        </View>
       
        {/* <Button 
            title="Ir a Persona"
            onPress = {() => navigation.navigate('PersonaScreen')}
        /> */}
    </View>
  )
}
