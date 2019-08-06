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

// stores UID into database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return // if user doesnt exist return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// google auth
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase