/**
 * @description It is an internal function that returns the buttons corresponding to the Social Networks. It is used in the Footer component.
 * @module components/SocialButton.js
 * @returns {JSX.Element} - the Social Button component
 * @param children Is the component to be placed inside the SocialButton component
 * @param label Is the ‘label’ to be assigned to the children
 * @param href Corresponds to the URL associated with the children
 */
const SocialButton = ({ children, label, href }) => {
	return (
		<a
			href={href}
			className="inline-flex items-center justify-center w-8 h-8 bg-blackAlpha-100 rounded-full cursor-pointer transition-bg duration-300 ease-in-out hover:bg-blackAlpha-200"
			aria-label={label}
		>
			{children}
		</a>
	);
};
export default SocialButton;
