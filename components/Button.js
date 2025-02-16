/**
 * @description The Button component is a reusable button component that can be used in different parts of the application. It has a default style and can be customized with additional classes.
 * @module components/Button.js
 * @exports Button
 * @param {Object} props - The component's props
 * @param {String} props.children - The button's text
 * @returns {JSX.Element} - The button component
 */
function Button({ className, children, ...props }) {
	return (
		<button
			className={`rounded-lg shadow-lg hover:bg-accent focus:outline-none box-border text-background text-center hover:translate-y-1 transition-all ${className}`}
			{...props} // Propagates all properties to the button element
		>
			{children}
		</button>
	);
}

export default Button;
