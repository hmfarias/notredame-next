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

import migrateProducts from '@/actions/migrateProducts';
import Button from '@/components/Button';
import PageTitle from '@/components/PageTitle';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = async () => {
	// migrateProducts(); //used just one time to add the products to firestore
	return (
		<>
			<PageTitle>Home</PageTitle>
			<div className="mt-4 flex grow flex-col gap-4 md:flex-row">
				<div className="flex flex-col justify-center items-center gap-6 rounded-lg bg-background md:w-2/5 md:px-5 text-center">
					<p className="text-xl text-text md:text-3xl md:leading-normal px-10">
						<strong>Welcome to NotreDame.</strong> An online multi-shop where you can find
						any product you need!
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
