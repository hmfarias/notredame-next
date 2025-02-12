'use client';

import { AuthContext } from '@/providers/AuthProvider';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { handleLogin, logedIn } = useContext(AuthContext);
	const router = useRouter();

	useEffect(() => {
		if (logedIn) {
			router.push('/');
		}
	}, [logedIn]);

	const methods = {
		email: setEmail,
		password: setPassword,
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleLogin(email, password);
	};

	const handleChange = (e) => {
		const value = e.target.value; // user input
		const name = e.target.name; // name of the input field

		methods[name](value); // update the state with the new value
	};

	return (
		<section className="grow grid place-content-center">
			<div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
				<h1 className="text-2xl font-bold text-center">Login</h1>
				<form noValidate="" action="" className="space-y-6" onSubmit={handleSubmit}>
					<div className="space-y-1 text-sm">
						<label htmlFor="email" className="block text-gray-400 dark:text-gray-600">
							Email
						</label>
						<input
							type="text"
							name="email"
							id="email"
							placeholder="Email"
							className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
							onChange={handleChange}
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="password" className="block text-gray-400 dark:text-gray-600">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
							onChange={handleChange}
						/>
					</div>
					<button className="block w-full p-3 text-center rounded-sm text-gray-900 dark:text-gray-50 bg-primary dark:bg-primary">
						Sign in
					</button>
				</form>
			</div>
		</section>
	);
};
export default LoginPage;
