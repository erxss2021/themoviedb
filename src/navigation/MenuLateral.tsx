import React from 'react';

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { colores, styles } from '../themes/appThemes';
import { Tabs } from './Tabs';
import { MovieNavigation } from './MovieNavigation';



const Drawer = createDrawerNavigator();



export const MenuLateral = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="Tabs" options={{title:'Home'}}  component={Tabs}  />
      <Drawer.Screen name="MovieNavigation" options={{title:'Movies'}} component={MovieNavigation} />
      <Drawer.Screen name="SettingScreen" options={{title:'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
      <DrawerContentScrollView>
        {/* Parte del avatar */}
        <View style={styles.avatarContainer}>
          <Image 
            source={{
              uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg'
            }}
            style={styles.avatar}
          />
        </View>

        {/* Opciones de menú */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={{
              ...styles.menuBoton,
              flexDirection: 'row',
              
            }}
            onPress={() => navigation.navigate('Tabs')}
          >
            
            <Icon name="compass-outline" size={30} color={colores.primary} />
            <Text style={styles.menuTexto}> Navegación</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
              ...styles.menuBoton,
              flexDirection: 'row'
            }}
            onPress={() => navigation.navigate('MovieNavigation')}
          >
                <Icon name="videocam-outline" size={30} color={colores.primary} />
                <Text style={styles.menuTexto}> Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
              ...styles.menuBoton,
              flexDirection: 'row'
            }}
            onPress={() => navigation.navigate('SettingScreen')}
          >
                <Icon name="settings-outline" size={30} color={colores.primary} />
                <Text style={styles.menuTexto}> Ajustes</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    )
}