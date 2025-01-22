import PageTitle from '@/components/PageTitle';
import Link from 'next/link';

const ProductLayout = async ({ children }) => {
	// Here I fetch the categories from the api
	const endpointBase = 'https://dummyjson.com/products';

	const endpoint = `${endpointBase}/categories`;
	const data = await fetch(endpoint);
	const categories = await data.json();

	console.log(categories);

	return (
		<div className="flex flex-col md:flex-row gap-8">
			<aside className="min-w-[200px]">
				<PageTitle>Filters</PageTitle>
				<div className="flex flex-col gap-1 ml-2 md:ml-4">
					{/* There are too many categories, I only bring 10 */}
					{categories.slice(0, 10).map((category) => {
						return (
							<Link key={category.slug} href={`/products/${category.slug}`}>
								{category.name}
							</Link>
						);
					})}
				</div>
			</aside>
			<div className="grow">{children}</div>
		</div>
	);
};

export default ProductLayout;
