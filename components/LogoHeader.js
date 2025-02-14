/**
 * @module components/LogoHeader.js
 * @returns {JSX.Element} - the Logo Header component
 * @exports LogoHeader
 * @requires Image
 * @requires Link
 * @description The Logo Header component returns the logo of the app
 */
import Image from 'next/image';
import Link from 'next/link';

const LogoHeader = () => {
	return (
		<Link href="/">
			<Image
				src="/logo.png"
				alt="logo"
				width={100}
				height={100}
				className="w-36 h-auto sm:w-45"
			/>
		</Link>
	);
};
export default LogoHeader;
