'use client';
/**
 * @module components/AuthLink.js
 * @returns {JSX.Element} - the Auth Link component
 * @exports AuthLink
 * @requires AuthContext
 * @requires CircleUserRound
 * @requires LogOutIcon
 * @requires Link
 * @requires useRouter
 * @requires useContext
 * @description The Auth Link component returns a link to the login or logout page depending on the user's status
 */

import { AuthContext } from '@/providers/AuthProvider';
import { CircleUserRound, LogOutIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

const AuthLink = () => {
	// consumes the context
	const { logedIn, handleLogout, currentUser } = useContext(AuthContext);
	const router = useRouter();

	const handleClick = () => {
		if (logedIn) {
			handleLogout();
		} else {
			router.push('/login');
		}
	};

	return (
		<button
			onClick={handleClick}
			type="button"
			className="focus:outline-none cursor-pointer text-text hover:text-secondary  "
			href="/admin"
			title={logedIn ? 'Close session' : 'Login user'}
		>
			{logedIn ? (
				<LogOutIcon className="w-6 h-6" />
			) : (
				<CircleUserRound className="w-6 h-6" />
			)}
		</button>
	);
};
export default AuthLink;
