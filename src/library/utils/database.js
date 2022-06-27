import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const db = firestore();

export const addFlightReservation = async (flight, navigation) => {
  const {origin, destination, date, passengers} = flight;
  const current = auth().currentUser;
  await db
    .collection('Flights')
    .add({
      origin: origin,
      destination: destination,
      date: date,
      passengers: passengers,
      uid: current.uid,
    })
    .then(() => {
      console.log('Flight added!');
      navigation.navigate('Home');
    });
};

export let showFlights = async () => {
  const current = auth().currentUser;
  try {
    const arrayFlights = [];
    const usersQuerySnapshot = await firestore()
      .collection('Flights')
      .where('uid', '==', current.uid)
      .get();
    usersQuerySnapshot.forEach(documentSnapshot => {
      arrayFlights.push({id: documentSnapshot.id, ...documentSnapshot.data()});
    });
    return arrayFlights;
  } catch (error) {
    const errorName = 'failure when trying to display flights';
    console.log(`ERROR:${errorName}    DESCRIPTION:${error}`);
  }
};

module.exports = {addFlightReservation, showFlights};
