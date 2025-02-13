'use client';
/**
 * @module components/AnimatedImg.js
 * @returns {JSX.Element} - the Animated Image component
 * @exports AnimatedImg
 * @requires motion
 * @requires Image
 * @description The Animated Image component returns a component that animates an image on the page
 */

import { motion } from 'motion/react';
import Image from 'next/image';

const AnimatedImg = (props) => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.7,
					scale: { type: 'spring', visualDuration: 0.5, bounce: 0.5 },
				}}
				className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12"
			>
				<Image
					src="/hero-desktop.png"
					alt="Screenshots of the dashboard"
					width={1000}
					height={760}
					className="hidden md:block"
				/>
				<Image
					src="/hero-mobile.png"
					alt="Screenshots of the dashboard"
					width={560}
					height={620}
					className="block md:hidden"
				/>
			</motion.div>
		</>
	);
};
export default AnimatedImg;
