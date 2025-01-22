/**
 * * home/page.js
 * Returns the home page
 */

import Button from '@/components/Button';
import PageTitle from '@/components/PageTitle';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = async () => {
	return (
		<>
			<PageTitle>Home</PageTitle>
			<div className="mt-4 flex grow flex-col gap-4 md:flex-row">
				<div className="flex flex-col justify-center items-center gap-6 rounded-lg bg-background md:w-2/5 md:px-5 text-center">
					<p className="text-xl text-text md:text-3xl md:leading-normal">
						<strong>Welcome to NotreDame</strong>
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
