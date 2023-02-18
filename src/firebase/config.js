import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC794zBB2NDYL6PeH81Q6rmPPZke893ECA",
  authDomain: "miniblog-253ec.firebaseapp.com",
  databaseURL: "https://miniblog-253ec-default-rtdb.firebaseio.com",
  projectId: "miniblog-253ec",
  storageBucket: "miniblog-253ec.appspot.com",
  messagingSenderId: "318791225056",
  appId: "1:318791225056:web:7f09c00a69279b17a90a85"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };