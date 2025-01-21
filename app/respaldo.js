/**
 * * NotFound.js
 * returns 404 Not Found page with a Home Page button link
 */

import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
	return (
		<div className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-gray-900 to-gray-700 min-h-screen">
			<Image
				src="/404.png"
				alt="404 Illustration"
				width={400} // Puedes ajustar el valor de width y height
				height={300} // Ajusta el valor de height según tus necesidades
				className="max-w-[400px] mb-6 rounded-lg shadow-lg"
			/>
			<div className="space-y-4">
				<h1 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
					Oops! Page not found.
				</h1>
				<p className="text-lg text-gray-600 dark:text-gray-300">
					It seems that you missed! Do not worry, there is always something interesting to
					discover.
				</p>
			</div>
			<div className="mt-8 space-x-4">
				<Link href="/">
					<Button>Go Home</Button>
				</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
