'use client';

import { AuthContext } from '@/providers/AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

/**
 * @description The Auth Link Mobile component returns a link to the login or logout page depending on the user's status and a toggleMenu function to toggle the menu
 * @module components/AuthLinkMobile.js
 * @returns {JSX.Element} - the Auth Link Mobile component
 */
const AuthLinkMobile = ({ toggleMenu }) => {
	// consumes the context
	const { logedIn, handleLogout, currentUser } = useContext(AuthContext);
	const router = useRouter();

	const handleClick = () => {
		if (logedIn) {
			handleLogout();
		} else {
			router.push('/login');
		}
		toggleMenu();
	};

	return (
		<Link
			onClick={handleClick}
			type="button"
			className=" text-text "
			href="/admin"
			title={logedIn ? 'Close session' : 'Login user'}
		>
			{logedIn ? 'Logout' : 'Login'}
		</Link>
	);
};
export default AuthLinkMobile;
