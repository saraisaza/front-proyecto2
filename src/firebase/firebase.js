import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAhBK95s3V_oIrkHeNrYn43INVDa1S7RdE",
    authDomain: "fb-crud-react-eb3b5.firebaseapp.com",
    projectId: "fb-crud-react-eb3b5",
    storageBucket: "fb-crud-react-eb3b5.appspot.com",
    messagingSenderId: "254035909728",
    appId: "1:254035909728:web:56975ca7b1f6924d57b705"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
