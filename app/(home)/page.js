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

import migrateCategories from '@/actions/migrateCategories';
import migrateProducts from '@/actions/migrateProducts';
import AnimatedImg from '@/components/AnimatedImg';
import AnimatedTitle from '@/components/AnimatedTitle';
import Button from '@/components/Button';
import PageTitle from '@/components/PageTitle';
import Link from 'next/link';

const HomePage = () => {
	migrateProducts(); //used just one time to populate the products collection in firestore
	migrateCategories(); //used just one time to populate the categories collection in firestore
	return (
		<>
			<PageTitle>Home</PageTitle>
			<div className="mt-4 flex grow flex-col gap-4 md:flex-row">
				<div className="flex flex-col justify-center items-center gap-2 md:gap-4rounded-lg bg-background md:w-2/5 md:px-5 text-center text-text md:leading-normal">
					<AnimatedTitle
						text="Welcome to "
						textSecondary="NotreDame!"
						textDescription="An online multi-shop where you can find any product you need!"
					/>
					<Link href="/products">
						<Button className=" text-white">Start -&gt;</Button>
					</Link>
				</div>
				<AnimatedImg />
			</div>
		</>
	);
};

export default HomePage;
