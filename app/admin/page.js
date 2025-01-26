/**
 * @module app/admin/page.js
 * @returns {JSX.Element} JSX.Element - the Admin Panel page
 * @exports AdminPage
 * @requires PageTitle
 * @description The Admin Panel page
 */
'use client';

import Button from '@/components/Button';
import PageTitle from '@/components/PageTitle';
import { auth } from '@/firebase';
import {
	signInWithEmailAndPassword,
	signInWithPopup,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

const AdminPage = () => {
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
		<>
			<PageTitle> Admin Panel</PageTitle>
			{logedIn ? (
				<Button onClick={handleLogout}>Logout</Button>
			) : (
				<Button onClick={handleLogin}>Login</Button>
			)}
		</>
	);
};

export default AdminPage;
