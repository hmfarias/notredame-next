'use client';
import Link from 'next/link';

const CategoryLink = ({ category, asOption }) => {
	if (asOption) {
		// Rendering as an option for the select
		return <option value={category.slug}>{category.name}</option>;
	}

	// Render like a normal link
	return <Link href={`/products/${category.slug}`}>{category.name}</Link>;
};

export default CategoryLink;

// 'use client';
// import Link from 'next/link';

// const CategoryLink = ({ category, pathname }) => {
// 	const categoryPath = `/products/${category.slug}`;

// 	return (
// 		<Link
// 			key={category.slug}
// 			href={categoryPath}
// 			className={`hover:text-gray-500 pl-2${
// 				pathname === categoryPath ? 'font-bold bg-accent/30 rounded-md px-2 py-1' : ''
// 			}`}
// 		>
// 			{category.name}
// 		</Link>
// 	);
// };

// export default CategoryLink;
