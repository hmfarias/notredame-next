'use client';
/**
 * @module components/AnimatedTitle.js
 * @returns {JSX.Element} - the Animated Title component
 * @exports AnimatedTitle
 * @requires motion
 * @description The Animated Title component retunrs a animated title in h1 label with a description in p label
 * @example
 * <AnimatedTitle
 * text="Welcome to "
 * textSecondary="NotreDame!"
 * textDescription="An online multi-shop where you can find any product you need!"
 * />
 */
import { motion } from 'motion/react';

const AnimatedTitle = (props) => {
	return (
		<>
			<motion.h1
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.7,
					scale: { type: 'spring', visualDuration: 0.5, bounce: 0.5 },
				}}
				className="text-4xl font-bold leading-none sm:text-5xl select-none"
			>
				{props.text}
				<span className="text-secondary">{props.textSecondary}</span>
			</motion.h1>
			<motion.p
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				whileTap={{ scale: 0.9 }}
				className="text-l md:text-2xl px-5"
			>
				{props.textDescription}
			</motion.p>
		</>
	);
};
export default AnimatedTitle;
