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
import { AuthContext } from '@/providers/AuthProvider';
import { useContext } from 'react';

const AdminPage = () => {
	// consumes the context
	const { logedIn, handleLogin, handleLogout, currentUser } = useContext(AuthContext);

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
