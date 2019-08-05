import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyB2floFdfO8lJ96JMdKyscQHZXhZjjL9xg",
  authDomain: "crwn-db-mena.firebaseapp.com",
  databaseURL: "https://crwn-db-mena.firebaseio.com",
  projectId: "crwn-db-mena",
  storageBucket: "",
  messagingSenderId: "912493156580",
  appId: "1:912493156580:web:e201f82c06287996"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// google auth
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase