import { Instagram, Twitter, Youtube } from 'lucide-react';
import SocialButton from './SocialButton';
import Image from 'next/image';

/**
 * @description Returns the Footer component
 * @module components/Footer.js
 * @returns {JSX.Element} - the Footer component
 * @exports Footer
 * @requires Image
 * @requires SocialButton
 */
const Footer = () => {
	return (
		<footer className="bg-primary p-4 text-sm">
			<div className=" flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
				<Image
					src="/logo.png"
					alt="logo"
					width={100}
					height={100}
					className="w-32 h-auto sm:w-40s"
				/>
				<div className="flex flex-col text-center">
					<p className="text-xs">&copy; 2025 Digital Wizard. All rights reserved</p>
					<p className="text-xs">Marcelo Farias</p>
				</div>
				<div className="flex space-x-6">
					<SocialButton label="Twitter" href="#">
						<Twitter />
					</SocialButton>
					<SocialButton label="YouTube" href="#">
						<Youtube />
					</SocialButton>
					<SocialButton label="Instagram" href="#">
						<Instagram />
					</SocialButton>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
