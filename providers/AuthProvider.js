'use client';
// Steps to create a context provider
// 1. Create a context using React.createContext (import createContext from React)
import { auth } from '@/firebase';
import { showErrorToast, showSuccessToast } from '@/utils/toasts';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

// 2. Create a context in a variable
export const AuthContext = createContext();

// 3. Get the provider from the context
const { Provider } = AuthContext;

// 4. Create a new component that uses the Provider inside of its return
export const AuthContextProvider = (props) => {
	const [logedIn, setLogedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState(null);

	// This is the function that will be called when the user logs in or out
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setLogedIn(true);
				setCurrentUser(user);
			} else {
				setLogedIn(false);
				setCurrentUser(null);
			}
		});
	}, []);

	const handleLogin = async (email, password) => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;
			showSuccessToast(`Welcome back, ${user.email}!`);
		} catch (error) {
			let errorMessage;
			switch (error.code) {
				case 'auth/invalid-credential':
				case 'auth/user-not-found':
				case 'auth/wrong-password':
					errorMessage = 'Invalid email or password.';
					break;
				case 'auth/too-many-requests':
					errorMessage = 'Too many failed login attempts. Try again later.';
					break;
				case 'auth/invalid-email':
					errorMessage = 'Please enter a valid email address.';
					break;
				default:
					errorMessage = error.message; // Show the original Firebase message if do not match any
			}

			showErrorToast(errorMessage);
			return null;
		}
	};

	const handleLogout = async () => {
		console.log('logout');
		await signOut(auth);
	};

	return (
		// 5. Configure the "value" prop of the context to be the initial state of the context
		<Provider value={{ currentUser, logedIn, handleLogin, handleLogout }}>
			{props.children}
		</Provider>
	);
};

export default AuthContextProvider;
