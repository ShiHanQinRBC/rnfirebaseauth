import firebase from 'firebase'
import 'firebase/firestore'

/*const firebaseConfig = {
    apiKey: 'AIzaSyAL59Dr8eK5fu8PZYCsS21z0cSxEHg2ne8',
    authDomain: 'fir-practice-84368.firebaseapp.com',
    databaseURL: 'https://fir-practice-84368.firebaseio.com',
    projectId: 'fir-practice-84368',
    storageBucket: 'fir-practice-84368.appspot.com',
    messagingSenderId: '700182149143',
    appId: '1:700182149143:web:5717d1e5abc9056aeac452'
}*/

import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    MESSAGE_SENDER_ID,
    APP_ID
} from 'react-native-dotenv'

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: '',
    messagingSenderId: MESSAGE_SENDER_ID,
    appId: APP_ID
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

/*db.settings({
	timestampsInSnapshots: true
})*/

export default Firebase;