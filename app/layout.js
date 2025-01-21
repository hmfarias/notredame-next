/**
 * * Layout.js
 * Corresponds to the main layout of the application.
 */

import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
	title: 'Notre Dame Ecommerce',
	authors: [{ name: 'Marcelo Farias' }],
	description: 'Aplicacion de comercio electrónico',
	keywords:
		'comercio electrónico, aplicación, nextjs, tailwind, sass, react, lucide, tailwindcss, Horacio Gutierrez, programador, argentina, ecommerce',
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
