// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyB33uBldS_jlo0C4rCN0zK1FfvbdZU0EU4',
	authDomain: 'notredame-next.firebaseapp.com',
	projectId: 'notredame-next',
	storageBucket: 'notredame-next.firebasestorage.app',
	messagingSenderId: '91238516820',
	appId: '1:91238516820:web:52a55ac61179866c78c5c1',
};

// Initialize Firebase (the app is login to firebase)
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Authentication services
export const db = getFirestore(app);
export const auth = getAuth(app);
