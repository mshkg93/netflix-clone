import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import {seedDatabase} from '../seed';

const config = {
  apiKey: 'AIzaSyDLM-0O2g9FTNvU4ZWBvgfMYwZM3MWQiD4',
  authDomain: 'netflix-demo-1f1dc.firebaseapp.com',
  projectId: 'netflix-demo-1f1dc',
  storageBucket: 'netflix-demo-1f1dc.appspot.com',
  messagingSenderId: '678734578093',
  appId: '1:678734578093:web:2948899319fb54c174a124',
  measurementId: 'G-T176P1K6GZ',
};

const firebasee = firebase.initializeApp(config);

// seedDatabase(firebasee);

export {firebasee as firebase};
