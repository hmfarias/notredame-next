/**
 * * home/page.js
 * Returns the home page
 */

import PageTitle from '@/components/PageTitle';

const HomePage = async () => {
	return (
		<>
			<PageTitle>Home</PageTitle>
			<div className=" p-2 md:p-4">
				<h1>Welcome to Notre Dame</h1>
			</div>
		</>
	);
};

export default HomePage;
