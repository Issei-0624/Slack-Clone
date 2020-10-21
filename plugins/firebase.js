import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyDrqUI481zs81h43-KUhEPqYCi5ebdQrRM',
    authDomain: 'slack-clone-8986d.firebaseapp.com',
    databaseURL: 'https://slack-clone-8986d.firebaseio.com',
    projectId: 'slack-clone-8986d',
    storageBucket: 'slack-clone-8986d.appspot.com',
    messagingSenderId: '465399867570',
    appId: '1:465399867570:web:41d898e35eca7fde3c81ab',
    measurementId: 'G-N8RH1S0H57',
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore() // データベースを定義
export { firebase, db }
