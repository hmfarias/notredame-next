function Button(props) {
	return (
		<button className="mt-6 bg-primary text-text px-6 py-3 rounded-lg shadow-lg hover:bg-accent focus:outline-none">
			{props.children}
		</button>
	);
}

export default Button;
