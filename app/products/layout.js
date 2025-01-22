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
				<div className="flex flex-col ml-2 md:ml-4">
					<Link href="/products">All Products</Link>
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

// Para usar luego como class en el link de las categorías
// className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3${
// 									pathName === link.href ? 'bg-sky-100 text-blue-600' : ''
// 								}`}
