/**
 * @module components/AnimatedMenu.js
 * @returns {JSX.Element} - the Animated Menu component
 * @exports AnimatedMenu
 * @requires motion
 * @requires AnimatePresence
 * @requires Link
 * @requires AdminLink
 * @requires AuthLinkMobile
 * @description The Animated Menu component returns a menu with a fade-in animation when the menu is open
 */
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import AdminLink from './AdminLink';
import AuthLinkMobile from './AuthLinkMobile';

const AnimatedMenu = ({ menuOpen, toggleMenu }) => {
	return (
		<>
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ height: 0 }} //Start without height (hidden)
						animate={{ height: 'auto' }} // It expands atomically
						exit={{ height: 0 }} //It shrinks until disappearing
						transition={{ duration: 0.3, ease: 'easeInOut' }} //Start slow → accelerate → ends slow
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
		</>
	);
};
export default AnimatedMenu;
