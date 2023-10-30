import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../themes/appThemes';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParam } from '../navigation/StackNavigation';
import { AuthContext } from '../context/AuthContext';

// interface RouterParam{
//     id: number;
//     nombre: string;
// }

interface Props extends StackScreenProps<RootStackParam, 'PersonaScreen'>{};

export const PersonaScreen = ({route, navigation}: Props) => {

    // const param = route.params as RouterParam;
    const param = route.params;

    //se utiliza el contexto creado
    const { changeUsername } = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            title: param.nombre
         })
    }, []);

    //solo se dispara una sola vez
    useEffect(() => {
      changeUsername(param.nombre);
    }, []);
    


    
  return (
    <View style = {styles.marginGlobal}>
        <Text style = {styles.title}>
            {
                JSON.stringify(param, null, 3)
            }
        </Text>
    </View>
  )
}
