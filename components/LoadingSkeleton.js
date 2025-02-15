import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

/**
 * @description Returns a skeleton of cards loading. it's a skeleton mapped according to the properties received in the parameter ‘className’ and the number of times you want to repeat it
 * @module components/LoadingSkeleton.js
 * @returns {JSX.Element} - the Loading Skeleton component
 * @exports LoadingSkeleton
 * @requires Skeleton
 * @requires skeleton.css
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
