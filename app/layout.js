/**
 * @module app/layout.js
 * @returns {JSX.Element} the main layout of the application
 * @exports RootLayout
 * @requires Header
 * @requires Footer
 * @description
 * The RootLayout component is the main layout of the application. It includes the Header and Footer components.
 * The Header component includes the site title and navigation menu.
 * The Footer component includes the site's footer content.
 */

import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthContextProvider from '@/providers/AuthProvider';
import CartContextProvider from '@/providers/CartProvider';
import { ToastContainer } from 'react-toastify';

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
				<AuthContextProvider>
					<CartContextProvider>
						<Header />
						<main className="grow p-4">{children}</main>
						<Footer />
						<ToastContainer />
					</CartContextProvider>
				</AuthContextProvider>
			</body>
		</html>
	);
}
