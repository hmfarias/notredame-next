'use client';
/**
 * @module components/Header.js
 * @returns {JSX.Element} - the Header component
 * @exports Header
 * @requires CartContext
 * @requires Menu
 * @requires X
 * @requires Image
 * @requires Link
 * @requires useContext
 * @requires useState
 * @requires CartWidget
 * @requires AuthLink
 * @requires AdminLink
 * @requires AuthLinkMobile
 * @description The Header component returns the header of the app
 */

import { CartContext } from '@/providers/CartProvider';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import CartWidget from './CartWidget';
import AuthLink from './AuthLink';
import AdminLink from './AdminLink';
import AuthLinkMobile from './AuthLinkMobile';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { cartState } = useContext(CartContext);

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
	};
	return (
		<header className="flex items-center justify-between p-4 bg-primary">
			{/* logo */}
			<Link href="/">
				<Image
					src="/logo.png"
					alt="logo"
					width={100}
					height={100}
					className="w-36 h-auto sm:w-45"
				/>
			</Link>

			{/* Cart Counter and Navbar */}
			<div className="flex items-center space-x-4">
				{/* Cart with counter */}
				<CartWidget />

				{/* Navbar */}
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
				<div className="md:hidden">
					<button onClick={toggleMenu} className="focus:outline-none flex items-center">
						{menuOpen ? (
							<X className="w-6 h-6 text-text hover:text-secondary" />
						) : (
							<Menu className="w-5 h-5 text-text hover:text-secondary" />
						)}
					</button>
				</div>
				<AnimatePresence>
					{menuOpen && (
						<motion.div
							initial={{ height: 0 }}
							animate={{ height: 'auto' }}
							exit={{ height: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
							className="absolute top-16 left-0 w-full bg-primary/70 backdrop-blur-lg text-white md:hidden px-2"
						>
							<motion.nav
								initial={{ opacity: 0 }}
								animate={{ opacity: 1, transition: { delay: 0.2 } }} // Delays the appearance of the text
								exit={{ opacity: 0, transition: { duration: 0.15 } }} // Disappears before the rise menu
								className="flex flex-col space-y-2 p-4"
							>
								<Link
									href="/"
									onClick={toggleMenu}
									className="text-text hover:text-secondary"
								>
									Home
								</Link>
								<Link
									href="/products"
									onClick={toggleMenu}
									className="text-text hover:text-secondary"
								>
									Products
								</Link>

								<AdminLink handle={toggleMenu} />

								<AuthLinkMobile toggleMenu={toggleMenu} />
							</motion.nav>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</header>
	);
};

export default Header;
