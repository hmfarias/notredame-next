/**
 * @module components/RatingStars.js
 * @param {number} rating - The rating value to be displayed.
 * @returns {JSX.Element} - The rendered rating stars.
 * @exports RatingStars
 * @description RatingStars is a component that displays a rating system with stars.
 * It takes a rating value as a prop and renders the appropriate number of filled stars based on the value.

 */
const RatingStars = ({ rating }) => {
	// Asegurarse de que el rating esté entre 0 y 5
	const validRating = Math.min(Math.max(rating, 0), 5);

	const stars = [];

	// Crear el arreglo de estrellas, siempre 5
	for (let i = 0; i < 5; i++) {
		if (i < validRating) {
			stars.push(
				<svg
					key={i}
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					className="w-6 h-6 text-yellow-500 mr-2"
				>
					<path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
				</svg>
			);
		} else {
			stars.push(
				<svg
					key={i}
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					className="w-6 h-6 text-gray-300 mr-2"
				>
					<path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
				</svg>
			);
		}
	}

	return <div className="flex">{stars}</div>;
};

export default RatingStars;
