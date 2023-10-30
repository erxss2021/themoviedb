//Definir como luce, que información tendre aquí

import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

//pueder ir creciendo la interface
export interface AuthState{
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Estado inicial -- justo cuando la app se lance
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined, //no es necesario, por que son opcionales
    favoriteIcon: undefined
}

//lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps{
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logout: () => void;
    changeUsername: (username: string) => void; 
}

//Crear el contexto
export const AuthContext = createContext( {} as AuthContextProps)


//componente proveedor del estado
export const AuthProvider = ({children}: any) => {

    //mantener el estado
    const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

    const signIn = () => {
        dispatch({type: 'signIn'})
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({type: 'changeFavIcon', payload: iconName})
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }

    const changeUsername = (username: string) => {
        dispatch({type: 'changeUsername', payload: username})
    }
    
    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logout,
            changeUsername
        }}>
            { children }
        </AuthContext.Provider>
    )
}