import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const signIn = (firstname, suscribe, email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User creado');
      const current = auth().currentUser;
      addUserInfo(firstname, suscribe, email, current.uid);
    })
    .catch(err => {
      console.log(err);
    });
};

const addUserInfo = (firstname, suscribe, email, uid) => {
  firestore()
    .collection('Users')
    .add({
      firstname: firstname,
      suscribe: suscribe,
      email: email,
      uid: uid,
    })
    .then(() => {
      console.log('Usuario agregado!');
    })
    .catch(error => console.log(error));
};
