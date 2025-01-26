/**
 * @module components/Button.js
 * @exports Button
 * @param {Object} props - The component's props
 * @param {String} props.children - The button's text
 * @returns {JSX.Element} - The button component
 * @description A standard button component with click event
 */

function Button(props) {
	return (
		<button
			className=" bg-primary text-text px-6 py-3 rounded-lg shadow-lg hover:bg-accent focus:outline-none min-w-1"
			onClick={props.onClick || null}
		>
			{props.children}
		</button>
	);
}

export default Button;
