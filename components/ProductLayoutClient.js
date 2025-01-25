// This is the layout for the products page. It fetches the categories from the api and displays them in a list.
'use client';
import { usePathname } from 'next/navigation';
import PageTitle from '@/components/PageTitle';
import Link from 'next/link';

const ProductLayoutClient = ({ categories, children }) => {
	const pathname = usePathname(); // Get the current path

	return (
		<div className="flex flex-col md:flex-row gap-8">
			<aside className="min-w-[300px] bg-secondary">
				<PageTitle>Filters</PageTitle>
				<div className="flex flex-col ml-2 md:ml-4">
					<Link
						href="/products"
						className={`hover:text-gray-500 pl-2${
							pathname === '/products'
								? 'font-bold bg-accent/30 rounded-md px-2 py-1'
								: ''
						}`}
					>
						All Products
					</Link>
					{/* There are too many categories, I only bring 7 */}
					{categories.slice(0, 7).map((category) => {
						const categoryPath = `/products/${category.slug}`;
						return (
							<Link
								key={category.slug}
								href={categoryPath}
								className={`hover:text-gray-500 pl-2${
									pathname === categoryPath
										? 'font-bold bg-accent/30 rounded-md px-2 py-1'
										: ''
								}`}
							>
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

export default ProductLayoutClient;
