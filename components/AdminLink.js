'use client';

import { AuthContext } from '@/providers/AuthProvider';
import Link from 'next/link';
import { useContext } from 'react';

function AdminLink({ handle }) {
	const { logedIn } = useContext(AuthContext);

	if (!logedIn) return null;

	return (
		<Link href="/admin" onClick={handle}>
			Admin
		</Link>
	);
}
export default AdminLink;
