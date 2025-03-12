import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAP4HV5oyyFO826BACqlpManmAIv2G8WtA",
    authDomain: "ninja-vue-1c1ec.firebaseapp.com",
    projectId: "ninja-vue-1c1ec",
    storageBucket: "ninja-vue-1c1ec.firebasestorage.app",
    messagingSenderId: "1628612882",
    appId: "1:1628612882:web:d6749672675d82815debcb",
    measurementId: "G-X0E8LBRVT1"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore,timestamp }; 