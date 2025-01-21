import PageTitle from '@/components/PageTitle';
import Link from 'next/link';

const ProductLayout = ({ children }) => {
	return (
		<div className="flex flex-col md:flex-row ga-8">
			<aside className="min-w-[200px]">
				<PageTitle>Filters</PageTitle>
				<div className="flex flex-col gap-1 ml-2 md:ml-4">
					<Link href="/products/cat/beauty">beauty</Link>
					<Link href="/products/cat/furniture">furniture</Link>
				</div>
			</aside>
			<div className="grow">{children}</div>
		</div>
	);
};

export default ProductLayout;
