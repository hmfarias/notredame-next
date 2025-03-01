import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

/**
 * @description This module exports the NotFoundPage component. It is a component that displays a 404 Not Found page with a Home Page button link
 * @module app/not-found.js
 * @returns {JSX.Element} JSX.Element - the 404 Not Found page
 * @exports NotFoundPage
 * @requires Button
 * @requires Image
 * @requires Link
 */
const NotFoundPage = () => {
	return (
		<section className="grow grid place-content-center bg-gradient-to-r from-gray-900 to-gray-700 p-10">
			<div className="flex flex-col items-center justify-center text-center ">
				<Image
					src="/404.png"
					alt="404 Illustration"
					width={400}
					height={300}
					className="w-80 h-auto sm:w-100 rounded-lg shadow-lg mb-6"
				/>
				<div className="space-y-2">
					<h1 className="text-xl md:text-4xl font-semibold bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
						Oops! Page not found.
					</h1>
					<p className="text-xs md:text-lg text-gray-300">
						It seems that you missed! Do not worry, there is always something interesting
						to discover.
					</p>
				</div>
				<div className="mt-8 space-x-4">
					<Link href="/">
						<Button className="p-2 mt-5 min-w-50 text-xl bg-primary ">Go Home</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default NotFoundPage;
