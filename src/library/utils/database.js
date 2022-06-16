import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const db = firestore();

/// addFlightReservation(flight,idUser)
// const flight =   {
//      origin: { aerolinea: "BEG", lugar: '' },
//      destination: { aerolinea: "AMS", lugar: '' },
//      date: '',
//      passengers: '',
//                 }

export const addFlightReservation = async (flight, navigation) => {
  try {
    const {origin, destination, date, passengers} = flight;
    await db.collection('Flights').add({origin, destination, date, passengers});
    navigation.navigate('Home');
  } catch (error) {
    const errorName = 'Could not add flight reservation';
    console.log(`ERROR:${errorName}    DESCRIPTION:${error}`);
  }
};

export let showFlights = async () => {
  try {
    const arrayFlights = [];
    const usersQuerySnapshot = await firestore().collection('Flights').get();
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
