import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../themes/appThemes';
import { StackScreenProps } from '@react-navigation/stack';
// import { useNavigation } from '@react-navigation/core';

interface Props extends StackScreenProps<any, any>{};

export const Pagina2Screen = ({navigation}: Props) => {

  // const navigation = useNavigation();
  return (
    <View style = {styles.marginGlobal}>
        <Text style = {styles.title}>Pagina2Screen</Text>

        <Button
            title="Ir pagina 3"
            onPress = {() => navigation.navigate('Pagina3Screen')}
        />
    </View>
  )
}
