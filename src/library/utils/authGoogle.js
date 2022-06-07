import React from 'react';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

//https://www.npmjs.com/package/@react-native-google-signin/google-signin
//https://github.com/react-native-google-signin/google-signin
// export const AuthGoogle = ({navigation}) => {
//   // estados de la sesion de google
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userInfo, setUserInfo] = useState([]);

//inicializar la configuración del objeto de inicio de sesión de Google

/*useEffect(() => {
    GoogleSignin.configure({
      //scopes: ['email'],
      webClientId:
        '879082586229-ecfnet5vc7stkasu4lt375bpk1b7uk57.apps.googleusercontent.com',
      //offlineAccess: true,
    });
  }, []);*/

// funcion para poder iniciar la sesion
export const signInGoogle = async navigation => {
  try {
    GoogleSignin.configure({
      webClientId:
        '879082586229-ecfnet5vc7stkasu4lt375bpk1b7uk57.apps.googleusercontent.com',
    });
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const authAux = await auth().signInWithCredential(googleCredential);
    const userData = {
      email: authAux.additionalUserInfo.profile.email,
      fullName: authAux.additionalUserInfo.profile.given_name,
    };
    if (authAux.additionalUserInfo.isNewUser) {
      return userData;
    }
    return navigation.navigate('Home');
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      console.log(error);
    }
  }
};
