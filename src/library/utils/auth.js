import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const SignIn = (firstname, suscribe, email, password, navigation) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User creado');
      const current = auth().currentUser;
      addUserInfo(firstname, suscribe, email, current.uid, navigation);
    })
    .catch(err => {
      console.log(err);
    });
};

export const logIn = (email, password, navigation) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => navigation.navigate('Home'))
    .catch(error => {
      alert('Usuario y/o contraseña incorrectos');
    });
};

export const addUserInfo = (firstname, suscribe, email, uid, navigation) => {
  firestore()
    .collection('Users')
    .add({
      firstname: firstname,
      suscribe: suscribe,
      email: email,
      uid: uid,
    })
    .then(() => {
      console.log('Usuario agregado! => Enviando  A Home');
      navigation.navigate('Home');
    })
    .catch(error => console.log(error));
};
