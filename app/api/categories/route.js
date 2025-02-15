import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { NextResponse } from 'next/server';

// Route Handlers

//*************************************************
// GET all categories from the database (server-side)
//************************************************/
export const GET = async () => {
	//bring the collection from firebase
	const categoriesCollection = collection(db, 'categories');

	try {
		//bring the categories of the collection
		const snapshot = await getDocs(categoriesCollection);

		//snapshot returns: {docs: [all documents here], size: 0, empty: true/false}
		//we need iterate snapshot in order to obtain the categories from docs
		const categories = snapshot.docs.map((documenRef) => {
			const productData = documenRef.data(); //the
			return productData;
		});

		return NextResponse.json(
			{
				message: 'Categories fetched successfully',
				error: false,
				payload: categories,
			},
			{ status: 200 } // 200 OK
		);
	} catch (error) {
		console.error('Error fetching categories:', error);
		return NextResponse.json(
			{
				message: 'Error fetching categories',
				error: true,
				payload: null,
			},
			{ status: 500 }
		); // 500 Internal Server Error
	}
};
