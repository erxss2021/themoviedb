import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../themes/appThemes';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style = {styles.marginGlobal}>
        <Text style = {styles.title}>Pagina3Screen</Text>

        <Button
            title="Regresar"
            onPress = {() => navigation.pop()}
        />
        <Button
            title="Home"
            onPress = {() => navigation.popToTop()}
        />
    </View>
  )
}
