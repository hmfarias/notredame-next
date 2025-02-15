import Image from 'next/image';
import Link from 'next/link';

/**
 * @description Returns the logo of the app. It is a link to the home page
 * @module components/LogoHeader.js
 * @returns {JSX.Element} - the Logo Header component
 * @exports LogoHeader
 * @requires Image
 * @requires Link
 */
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
