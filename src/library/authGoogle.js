/*import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';

//https://www.npmjs.com/package/@react-native-google-signin/google-signin
//https://github.com/react-native-google-signin/google-signin
const AuthGoogle = () => {
  // estados de la sesion de google
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  //inicializar la configuración del objeto de inicio de sesión de Google

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:
        '418977770929-g9ou7r9eva1u78a3anassxxxxxxx.apps.googleusercontent.com',
      offlineAccess: true,
    });
  });


  // funcion para poder iniciar la sesion
  const signIn = async () => {
    try {
      // inicia sesion con google y actualiza el estado de logged
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      setLoggedIn(true);
    } catch (error) {
      console.log('Error SigIn: ' + error);
    }
  };

  // funcion para poider cerrar la sesion

  const singOut = async () => {
    try{


    }
    catch{
        
    }
  }

  return <View></View>;
};
*/
