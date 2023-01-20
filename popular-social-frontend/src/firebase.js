import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // for authentication
import 'firebase/compat/firestore'; // for cloud firestore
import 'firebase/compat/storage'; // for storage
import 'firebase/compat/database'; // for realtime database

const firebaseConfig = {
    apiKey: "AIzaSyB4XOnofbR0K1gWpGGJiTqVt3BUaeo6HFM",
    authDomain: "popular-social-mern-f1d53.firebaseapp.com",
    projectId: "popular-social-mern-f1d53",
    storageBucket: "popular-social-mern-f1d53.appspot.com",
    messagingSenderId: "354458617593",
    appId: "1:354458617593:web:d53feefccf34a82bae4428"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db