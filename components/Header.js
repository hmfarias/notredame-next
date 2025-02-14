'use client';
/**
 * @module components/Header.js
 * @returns {JSX.Element} - the Header component
 * @exports Header
 * @requires LogoHeader
 * @requires Navbar
 * @requires CartWidget
 * @requires LogoHeader
 * @description The Header component returns the header of the app
 */

import CartWidget from './CartWidget';
import LogoHeader from './LogoHeader';
import Navbar from './Navbar';

const Header = () => {
	return (
		<header className="flex items-center justify-between p-4 bg-primary">
			{/* logo */}
			<LogoHeader />
			{/* Cart Counter and Navbar */}
			<div className="flex items-center space-x-4">
				{/* Cart with counter */}
				<CartWidget />
				{/* Navbar */}
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
