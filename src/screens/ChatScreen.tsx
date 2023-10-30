import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { AuthContext} from '../context/AuthContext';
import { Button } from 'react-native';
import { styles } from '../themes/appThemes';

export const ChatScreen = () => {

  const {logout, authState} = useContext(AuthContext)
  
  return (
    <View style={styles.marginGlobal}>
        <Text style={styles.title}>Chat Screen</Text>

        {
          authState.isLoggedIn && <Button title='logout' onPress={logout} />
        }
    </View>
  )
}
