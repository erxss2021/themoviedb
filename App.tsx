import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigation } from './src/navigation/StackNavigation';
// import { MenuLateralBasico } from './src/navigation/MenuLateralBasico';
import { MenuLateral } from './src/navigation/MenuLateral';
import { Tabs } from './src/navigation/Tabs';
import { AuthProvider } from './src/context/AuthContext';
import { FeedScreen } from './src/screens/FeedScreen';



const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <Text>Hola navegación</Text> */}
        {/* <StackNavigation /> */}
        {/* <MenuLateralBasico /> */}
        {/* Principal */}
        <MenuLateral /> 
        {/* <FeedScreen /> */}
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
    
  )
}

const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;
