// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAtLF_E_CLWEjcWPNzwKzGyj_rwApru5iU',
  authDomain: 'abeebdon-99047.firebaseapp.com',
  projectId: 'abeebdon-99047',
  storageBucket: 'abeebdon-99047.appspot.com',
  messagingSenderId: '591981393548',
  appId: '1:591981393548:web:5fb64d4adabc3ee1bb6da9',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)
const db = getFirestore(app)
export { db, firestore, auth, storage }
