// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfB5N0v7n3AUplmPyR1w9IQDN9CRqTQi8",
  authDomain: "expresso-client.firebaseapp.com",
  projectId: "expresso-client",
  storageBucket: "expresso-client.appspot.com",
  messagingSenderId: "469875053380",
  appId: "1:469875053380:web:c84c2297e21bbe68c17d11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;