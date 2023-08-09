import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firestore'
import { getStorage } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWNAkl6FtyVBFV0PI10zPDpcQ0z-XZ_uk",
  authDomain: "fir-e88ec.firebaseapp.com",
  projectId: "fir-e88ec",
  storageBucket: "fir-e88ec.appspot.com",
  messagingSenderId: "460437042014",
  appId: "1:460437042014:web:2471b4f105670a547595cf",
  measurementId: "G-D2K400X1GR"
};

 export const app = initializeApp(firebaseConfig);
 export const storage = getStorage(app);
 export const db = getFirestore(app);
  