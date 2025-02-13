/**
 * @module app/(home)/page.js
 * @returns {JSX.Element} JSX.Element - the Home Page
 * @exports HomePage
 * @requires Button
 * @requires PageTitle
 * @requires Image
 * @requires Link
 * @description The Home Page of the app
 */

// import migrateCategories from '@/actions/migrateCategories';
// import migrateProducts from '@/actions/migrateProducts';
import Button from '@/components/Button';
import PageTitle from '@/components/PageTitle';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
	// migrateProducts(); //used just one time to add the products to firebase
	// migrateCategories(); //used just one time to add the categories to firebase
	return (
		<>
			<PageTitle>Home</PageTitle>
			<div className="mt-4 flex grow flex-col gap-4 md:flex-row">
				<div className="flex flex-col justify-center items-center gap-2 md:gap-4rounded-lg bg-background md:w-2/5 md:px-5 text-center text-text md:leading-normal">
					<h1 className="text-4xl font-bold leading-none sm:text-5xl">
						Welcome to
						<span className="text-accent"> NotreDame</span>!
					</h1>

					<p className="text-l md:text-2xl px-5">
						An online multi-shop where you can find any product you need!
					</p>
					<Link href="/products">
						<Button className>Start -&gt;</Button>
					</Link>
				</div>
				<div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
					<Image
						src="/hero-desktop.png"
						alt="Screenshots of the dashboard"
						width={1000}
						height={760}
						className="hidden md:block"
					/>
					<Image
						src="/hero-mobile.png"
						alt="Screenshots of the dashboard"
						width={560}
						height={620}
						className="block md:hidden"
					/>
				</div>
			</div>
		</>
	);
};

export default HomePage;
