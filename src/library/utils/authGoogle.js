import React from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {addUserInfo} from './auth';
//const signIn = (firstname, suscribe, email, password, navigation)
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
      const current = auth().currentUser;
      addUserInfo(
        userData.fullName,
        false,
        userData.email,
        current.uid,
        navigation,
      );
    }
    return navigation.navigate('Home');
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('user cancelled the login flow: ' + error.code);
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('operation (sign in) is in progress already: ' + error.code);
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('play services not available or outdated: ' + error.code);
    } else {
      console.log(error);
    }
  }
};
