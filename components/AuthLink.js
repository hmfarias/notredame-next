'use client';

import { AuthContext } from '@/providers/AuthProvider';
import { CircleUserRound, LogOutIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

const AuthLink = () => {
	// consumes the context
	const { logedIn, handleLogout, currentUser } = useContext(AuthContext);
	const router = useRouter();

	console.log('🇮🇪 logedin:', logedIn);

	const handleClick = () => {
		if (logedIn) {
			handleLogout();
		} else {
			router.push('/login');
		}
	};
	console.log('🇬🇦 currentUser in Link:', currentUser);

	return (
		<button
			onClick={handleClick}
			type="button"
			className="focus:outline-none cursor-pointer hover:text-gray-400  "
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
