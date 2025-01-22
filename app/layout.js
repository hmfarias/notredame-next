/**
 * * Layout.js
 * Corresponds to the main layout of the application.
 */

import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
	title: 'NotreDame Ecommerce',
	authors: [{ name: 'Marcelo Farias' }],
	description: 'E-Commerce Aplication',
	keywords:
		'ecommerce, polirubro, application, nextjs, tailwind, sass, react, lucide, tailwindcss, Marcelo Farias, programmer, argentina, ecommerce',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-background min-h-screen flex flex-col">
				<Header />
				<main className="grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
