import Link from 'next/link';
import AdminLink from './AdminLink';
import AuthLinkMobile from './AuthLinkMobile';

/**
 * @description The Animated Menu component returns a mobile menu with a fade-in animation when the menu is open
 * @module components/AnimatedMenu.js
 * @returns {JSX.Element} - the Animated Menu component
 */
const AnimatedMenu = ({ menuOpen, toggleMenu }) => {
	return (
		<>
			<div
				className={`absolute top-full left-0 w-full bg-primary/70 backdrop-blur-lg text-white md:hidden p-2overflow-hidden transition-all duration-500 ease-in-out ${
					menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
				}`}
			>
				<nav className="flex flex-col space-y-2 p-4">
					<Link href="/" onClick={toggleMenu} className="text-text">
						Home
					</Link>
					<Link href="/products" onClick={toggleMenu} className="text-text">
						Products
					</Link>

					<AdminLink handle={toggleMenu} />

					<AuthLinkMobile toggleMenu={toggleMenu} />
				</nav>
			</div>
		</>
	);
};
export default AnimatedMenu;
