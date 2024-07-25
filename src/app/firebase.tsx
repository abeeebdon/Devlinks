// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCi_sP1gaBJF_J0tqQgFA7JsVrwjjAjIJQ',
  authDomain: 'devlinks-260e2.firebaseapp.com',
  projectId: 'devlinks-260e2',
  storageBucket: 'devlinks-260e2.appspot.com',
  messagingSenderId: '343303825018',
  appId: '1:343303825018:web:bb65dd4cab039137267dc3',
  measurementId: 'G-HDWW93VPNG',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)
const db = getFirestore(app)
export { db, firestore, auth, storage }
