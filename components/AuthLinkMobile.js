'use client';
/**
 * @module components/AuthLinkMobile.js
 * @returns {JSX.Element} - the Auth Link Mobile component
 * @exports AuthLinkMobile
 * @requires AuthContext
 * @requires CircleUserRound
 * @requires LogOutIcon
 * @requires Link
 * @requires useRouter
 * @requires useContext
 * @description The Auth Link Mobile component returns a link to the login or logout page depending on the user's status and a toggleMenu function to toggle the menu
 *
 */

import { AuthContext } from '@/providers/AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

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
			className="focus:outline-none cursor-pointer hover:text-gray-400  "
			href="/admin"
			title={logedIn ? 'Close session' : 'Login user'}
		>
			{logedIn ? 'Logout' : 'Login'}
		</Link>
	);
};
export default AuthLinkMobile;
