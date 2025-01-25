/**
 * @module app/products/loading.js
 * @returns {JSX.Element} the "loading" message during the products page loading
 * @requires react
 * @exports loading
 * @description The "loading" message during the products page loading
 */

import LoadingSkeleton from '@/components/LoadingSkeleton';

const loading = () => {
	return <LoadingSkeleton className="aspect-[1/1.15]" repeat={6} />;
};
export default loading;
