import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigation } from './StackNavigation';
import { colores } from '../themes/appThemes';
import { TopTab } from './TopTab';


export const Tabs = () =>{
    return Platform.OS === 'ios'
                ? <TabsIOS />
                : <TabsAndroid />
}

//Plataforma Android
const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
        screenOptions={({route}) => ({    
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
                borderTopColor: colores.primary,
                borderTopWidth: 0,
                elevation: 0
            },
            tabBarLabelStyle:{
                fontSize: 15
            },
            
            tabBarIcon:({color, focused}) =>{

                let iconName: string = '';
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'boat-outline';
                        break;
                    case 'Tab2Screen':
                        iconName = 'cash-outline';
                        break;
                    case 'StackNavigation':
                        iconName = 'cog-outline';
                        break;
                }
                return <Icon name={iconName} size={20} color={colores.primary} />
            }
        })}
        sceneAnimationEnabled = {true}
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: colores.primary }}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTab} />
      <BottomTabAndroid.Screen name="StackNavigation" options={{title: 'Stack'}} component={StackNavigation} />
    </BottomTabAndroid.Navigator>
  );
}

//plataforma IOS
const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () =>{
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
        screenOptions={({route}) => ({
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
                borderTopColor: colores.primary,
                borderTopWidth: 0,
                elevation: 0
            },
            tabBarLabelStyle:{
                fontSize: 15
            },
            tabBarIcon:({color, focused, size}) =>{

                let iconName: string = '';
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'boat-outline';
                        break;
                    case 'Tab2Screen':
                        iconName = 'cash-outline';
                        break;
                    case 'StackNavigation':
                        iconName = 'cog-outline';
                        break;
                }
                return <Icon name={iconName} size={20} color={colores.primary} />
            }
        })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title: 'Tab2'}} component={TopTab} />
      <BottomTabIOS.Screen name="StackNavigation" options={{title: 'Stack'}} component={StackNavigation} />
    </BottomTabIOS.Navigator>
  );
}