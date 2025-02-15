'use client';

import LogoHeader from './LogoHeader';
import Navbar from './Navbar';
import CartWidget from './CartWidget';

/**
 * @description Returns the Header component
 * @module components/Header.js
 * @returns {JSX.Element} - the Header component
 * @exports Header
 * @requires LogoHeader
 * @requires Navbar
 * @requires CartWidget
 */
const Header = () => {
	return (
		<header className="relative flex items-center justify-between p-4 bg-primary">
			{/* logo */}
			<div className="flex-1">
				<LogoHeader />
			</div>
			<div className="flex justify-end ml-auto space-x-4">
				{/* Cart with counter*/}
				<CartWidget />
				{/* Navbar */}
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
