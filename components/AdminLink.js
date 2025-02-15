'use client';

import { AuthContext } from '@/providers/AuthProvider';
import Link from 'next/link';
import { useContext } from 'react';

/**
 * @description The Admin Link component returns a link to the admin panel page if the user is logged in
 * @module components/AdminLink.js
 * @returns {JSX.Element} - the Admin Link component
 * @exports AdminLink
 * @requires AuthContext
 * @requires Link
 * @requires useContext
 */
function AdminLink({ handle }) {
	const { logedIn } = useContext(AuthContext);

	if (!logedIn) return null;

	return (
		<Link href="/admin" onClick={handle} className="text-text hover:text-secondary">
			Admin
		</Link>
	);
}
export default AdminLink;
