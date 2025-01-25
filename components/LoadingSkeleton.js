import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
/**
 * @module components/LoadingSkeleton.js
 * @returns {JSX.Element} skeleton of cards loading
 * @description Returns a skeleton mapped according to the properties received in the parameter ‘className’ and the number of times you want to repeat it.
 */

const LoadingSkeleton = ({ className = '', repeat = 1 }) => {
	return (
		<>
			{Array.from({ length: repeat }, (_, index) => (
				<Skeleton key={index} className={className} />
			))}
		</>
	);
};

export default LoadingSkeleton;
