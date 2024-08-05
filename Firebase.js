import * as firebase from 'firebase';

import 'firebase/firestore'

const configuration ={
  
        apiKey: "AIzaSyA1UfXgNO79ufPORba89xwNTUEpGPlD17E",
  authDomain: "kriya-6adc2.firebaseapp.com",
  projectId: "kriya-6adc2",
  storageBucket: "kriya-6adc2.appspot.com",
  messagingSenderId: "573094125085",
  appId: "1:573094125085:web:e0cc69a7d266b5316430f4",
  measurementId: "G-T39L1C6MFB"
  
}

firebase.initializeApp(configuration)

const db = firebase.firestore()

export default db