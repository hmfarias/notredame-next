'use client';

import { usePathname, useRouter } from 'next/navigation';
import PageTitle from '@/components/PageTitle';
import CategoryLink from './CategoryLink';

/**
 * @description The Product Layout Client component returns a layout for the product page. It includes a sidebar with a dropdown list to select the category and the main content.
 * @module components/ProductLayoutClient.js
 * @returns {JSX.Element} - the Product Layout Client component
 * @exports ProductLayoutClient
 * @requires usePathname
 * @requires useRouter
 * @requires PageTitle
 * @requires CategoryLink
 */
const ProductLayoutClient = ({ categories, children }) => {
	const pathname = usePathname(); // Get the current route
	const router = useRouter(); // Hook to navigate programmatically

	// Order the categories alphabetically by name
	const sortedCategories = categories.sort((a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});

	// Handle to redirect the user when selecting a category
	const handleCategoryChange = (e) => {
		const selectedSlug = e.target.value;
		if (selectedSlug === 'all') {
			router.push('/products'); // redirect "All products"
		} else {
			router.push(`/products/${selectedSlug}`); // Redirect to the selected category
		}
	};

	return (
		<div className="flex flex-col md:flex-row gap-8">
			<aside className="min-w-[300px]">
				<PageTitle>Filters</PageTitle>
				<div className="flex flex-col md:leading-7 bg-secondary p-2 rounded-md">
					<p className="font-bold text-xl">Category</p>

					{/* Dropdown list*/}
					<select
						className="w-full p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-accent"
						onChange={handleCategoryChange} // Handles selection change
						value={pathname.split('/').pop() || 'all'} // Fix the value for the input according to the current route
					>
						{/* Option for "All Products"*/}
						<option value="all">All Products</option>

						{/* Render the categories using categorylink */}
						{sortedCategories.map((category) => (
							<CategoryLink
								key={category.slug}
								category={category}
								asOption // Indicates that it must be rendered as an option
							/>
						))}
					</select>
				</div>
			</aside>

			{/* Contenido principal */}
			<div className="grow">{children}</div>
		</div>
	);
};

export default ProductLayoutClient;
