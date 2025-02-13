/**
 * @module GetStockMessage
 * @returns {JSX.Element} - the Get Stock Message component
 * @exports GetStockMessage
 * @description Is an internal component, which returns a component showing the available stock of the product, using conditional rendering and Tailwind's utility clas
 * @param {*} stock Is the amount of available stock of the product, which will be displayed with Conditional Rendering.
 */

const GetStockMessage = ({ stock }) => {
	const message =
		stock === 0
			? 'OUT OF STOCK - Soon available!'
			: stock <= 5
			? `${stock} - Last available units!`
			: stock;

	const textColor =
		stock === 0 ? 'text-red-500' : stock <= 5 ? 'text-orange-500' : 'text-green-500';
	const fontWeight = stock === 0 ? 'font-bold' : 'font-normal';
	const fontStyle = stock <= 5 && stock > 0 ? 'italic' : 'normal';

	return <span className={`${textColor} ${fontWeight} ${fontStyle}`}>{message}</span>;
};

export default GetStockMessage;
