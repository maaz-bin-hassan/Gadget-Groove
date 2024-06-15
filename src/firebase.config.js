import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider,signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCkEQsVnoOzcDCW_Ck3vRqtuBzui9LN1JA",
  authDomain: "gadget-groove-b6688.firebaseapp.com",
  projectId: "gadget-groove-b6688",
  storageBucket: "gadget-groove-b6688.appspot.com",
  messagingSenderId: "18998295767",
  appId: "1:18998295767:web:853f2ab353503873484492",
  measurementId: "G-X91PMDGCWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()

export const auth = getAuth(app);
auth.languageCode = 'en';
export const db = getFirestore(app)
export const storage = getStorage(app)




export default app
