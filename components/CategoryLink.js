'use client';
import Link from 'next/link';

/**
 * @description The Category Link component returns a link to the product page of a category
 * @module components/CategoryLink.js
 * @returns {JSX.Element} - the Category Link component
 * @exports CategoryLink
 * @requires Link
 */
const CategoryLink = ({ category, asOption }) => {
	if (asOption) {
		// Rendering as an option for the select
		return <option value={category.slug}>{category.name}</option>;
	}

	// Render like a normal link
	return <Link href={`/products/${category.slug}`}>{category.name}</Link>;
};

export default CategoryLink;
