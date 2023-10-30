import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../themes/appThemes';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {

    //para ios
    const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={({route}) =>({
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true, //Para visualizar iconos
            tabBarIndicatorStyle:{
                backgroundColor: colores.primary
            },
            tabBarStyle:{
                //ios
                shadowColor: 'transparent',
                //android
                elevation: 0
            },

            tabBarIcon: ({color}) => {
                let iconName: string = '';
                switch (route.name) {
                  case 'ChatScreen':
                    iconName = 'chatbubble-ellipses-outline';
                    break;
       
                  case 'ContactScreen':
                    iconName = 'people-outline';
                    break;
       
                  case 'AlbumsScreen':
                    iconName = 'albums-outline';
                    break;
                }
                return <Icon name={iconName} size={20} color={colores.primary} />;
              },
        })}
        //para ios
        style={{
            paddingTop: top
        }}
    >
      <Tab.Screen name="ChatScreen"  options={{ title: 'Chat'}} component={ChatScreen} />
      <Tab.Screen name="ContactScreen"  options={{ title: 'Contact'}} component={ContactScreen} />
      <Tab.Screen name="AlbumsScreen"  options={{ title: 'Albums'}} component={AlbumsScreen} />
    </Tab.Navigator>
  );
}