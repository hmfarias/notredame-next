/**
 * * Header.js
 * Return the header component for the app
 */

'use client';
import { CartContext } from '@/providers/CartProvider';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import CartWidget from './CartWidget';
import AuthLink from './AuthLink';
import AdminLink from './AdminLink';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { cartState } = useContext(CartContext);
	console.log('5️⃣ cartState in header:', cartState);

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
		// Aquí puedes agregar lógica para mostrar u ocultar el menú
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
				{/* Cart Counter
				<Link
					href="/cart"
					className="hover:text-gray-400 flex items-center space-x-6 text-l"
				>
					<ShoppingCartIcon className="mr-1 w-5 h-5" />
					<span className="text-l">{77}</span>
				</Link> */}
				<CartWidget />

				{/* Navbar */}
				<nav className="hidden md:flex space-x-4">
					<Link href="/" className="hover:text-gray-400">
						Home
					</Link>
					<Link href="/products" className="hover:text-gray-400 text-center">
						Products
					</Link>

					<AdminLink />

					<AuthLink />
				</nav>
				<div className="md:hidden">
					<button onClick={toggleMenu} className="focus:outline-none flex items-center">
						{menuOpen ? (
							<X className="w-6 h-6 text-white" />
						) : (
							<Menu className="w-5 h-5 text-white" />
						)}
					</button>
				</div>
				{menuOpen && (
					<div className="absolute top-16 left-0 w-full bg-gray-800 text-white md:hidden">
						<nav className="flex flex-col space-y-2 p-4">
							<Link href="/" onClick={toggleMenu} className="hover:text-gray-400">
								Home
							</Link>
							<Link href="/admin" onClick={toggleMenu} className="hover:text-gray-400">
								Admin
							</Link>
							<Link href="/products" onClick={toggleMenu} className="hover:text-gray-400">
								Products
							</Link>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
