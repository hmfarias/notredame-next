import Link from 'next/link';
import AdminLink from './AdminLink';
import AuthLink from './AuthLink';
import { Menu, X } from 'lucide-react';
import AnimatedMenu from './AnimatedMenu';
import { useState } from 'react';

/**
 * @description Returns the navbar of the app (desktop and mobile).
 * @module components/Navbar.js
 * @returns {JSX.Element} - the Navbar component
 * @exports Navbar
 * @requires Link
 * @requires AdminLink
 * @requires AuthLink
 * @requires Menu
 * @requires X
 * @requires AnimatedMenu
 * @requires useState
 */
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
	};

	return (
		<>
			{/*Navbar */}
			<div className="flex items-center space-x-4 mr-0">
				{/* Navbar Desktop */}
				<nav className="hidden md:flex space-x-4">
					<Link href="/" className="text-text hover:text-secondary">
						Home
					</Link>
					<Link href="/products" className="text-text hover:text-secondary text-center">
						Products
					</Link>
					<AdminLink />
					<AuthLink />
				</nav>
				{/* Navbar Mobile */}
				<div className="md:hidden relative">
					<button onClick={toggleMenu} className="focus:outline-none flex items-end">
						{menuOpen ? (
							<X className="w-6 h-6 text-text hover:text-secondary" />
						) : (
							<Menu className="w-5 h-5 text-text hover:text-secondary" />
						)}
					</button>
				</div>
			</div>
			<AnimatedMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
		</>
	);
};
export default Navbar;
