'use client';
import Link from 'next/link';
/**
 * @module components/Header.js
 * @returns {JSX.Element} - the Header component
 * @exports Header
 * @requires LogoHeader
 * @requires Navbar
 * @description The Header component returns the header of the app
 */

import LogoHeader from './LogoHeader';
import Navbar from './Navbar';

const Header = () => {
	return (
		<header className="relative flex items-center justify-between p-4 bg-primary">
			{/* logo */}
			<LogoHeader />
			{/* Navbar and Cart with counter*/}
			<Navbar />
		</header>
	);
};

export default Header;
