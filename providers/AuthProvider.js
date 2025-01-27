'use client';
// Steps to create a context provider
// 1. Create a context using React.createContext (import createContext from React)
import { auth } from '@/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

// 2. Create a context in a variable
export const AuthContext = createContext();

// 3. Get the provider from the context
const { Provider } = AuthContext;

// 4. Create a new component that uses the Provider inside of its return
export const AuthContextProvider = (props) => {
	const [logedIn, setLogedIn] = useState(false);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setLogedIn(true);
			} else {
				setLogedIn(false);
			}
		});
	}, []);

	const handleLogin = async () => {
		console.log('login');
		const result = await signInWithEmailAndPassword(
			auth,
			'admin@notredame.com',
			'admin123'
		);
	};

	const handleLogout = async () => {
		console.log('logout');
		await signOut(auth);
	};

	return (
		// 5. Configure the "value" prop of the context to be the initial state of the context
		<Provider value={{ logedIn, handleLogin, handleLogout }}>{props.children}</Provider>
	);
};

export default AuthContextProvider;
