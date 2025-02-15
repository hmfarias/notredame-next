/**
 * @description The Button component is a reusable button component that can be used in different parts of the application. It has a default style and can be customized with additional classes.
 * @module components/Button.js
 * @exports Button
 * @param {Object} props - The component's props
 * @param {String} props.children - The button's text
 * @returns {JSX.Element} - The button component
 */
function Button(props) {
	return (
		<button
			className={`bg-primary text-text px-6 py-3 rounded-lg shadow-lg hover:bg-accent focus:outline-none min-w-1 ${props.className}`}
			onClick={props.onClick || null}
		>
			{props.children}
		</button>
	);
}

export default Button;
