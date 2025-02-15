'use client';

import { AuthContext } from '@/providers/AuthProvider';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

/**
 * @description Returns the Login page
 * @module app/login/page.js
 * @returns {JSX.Element} JSX.Element - the Login page
 * @exports LoginPage
 * @requires AuthContext
 * @requires useRouter
 * @requires useContext
 * @requires useEffect
 * @requires useState
 */
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
		<section className="grow grid place-items-center">
			<div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-accent/50 text-text mt-10">
				<h1 className="text-2xl font-bold text-center">Login</h1>
				<form noValidate="" action="" className="space-y-6" onSubmit={handleSubmit}>
					<div className="space-y-1 text-sm">
						<label htmlFor="email" className="block text-text ">
							Email
						</label>
						<input
							type="text"
							name="email"
							id="email"
							placeholder="Email"
							className="w-full px-4 py-3 rounded-md border-accent bg-background text-text  focus:border-accent "
							onChange={handleChange}
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="password" className="block text-text">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							className="w-full px-4 py-3 rounded-md border-accent bg-background text-text  focus:border-accent"
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
