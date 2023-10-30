import React from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores, styles } from '../themes/appThemes';
import { TouchableIcon } from '../components/TouchableIcon';
export const Tab1Screen = () => {
  return (
    <View style={styles.marginGlobal}>
        <Text style={styles.title}>Iconos</Text>
        <Text>
          <TouchableIcon iconName="airplane-outline"  />
          <TouchableIcon iconName="alarm-outline"  />
          <TouchableIcon iconName="barbell-outline"  />
          <TouchableIcon iconName="basketball"  />
          <TouchableIcon iconName="car-sport"  />
          <TouchableIcon iconName="fast-food-outline"/>
          <TouchableIcon iconName="flower-outline"  />
        </Text>
        
    </View>
  )
}
