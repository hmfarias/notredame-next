/**
 * @module app/api/products/route.js
 * @description This is the API route for products
 * Implement the following routes:
 * @route GET /api/products
 * @description Fetches the products list from the API. If a category is provided, it fetches the products by category else it fetches all products
 * @route POST /api/products
 * @param {*} req
 * @returns {Object} NextResponse
 */

import { db } from '@/firebase';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { NextResponse } from 'next/server';

// Route Handlers

export const GET = async (req) => {
	const searchParams = req.nextUrl.searchParams;
	const category = searchParams.get('category');
	console.log('Categoria en route');
	console.log(category);

	// to simulate a delay in the response
	// await new Promise((resolve) => setTimeout(resolve, 3000));

	//bring the collection from firebase
	const productsCollection = collection(db, 'products');

	try {
		// filter in case a category is received
		const filter = query(productsCollection, where('category', '==', category));

		//bring the products of the collection by applying the filter (if no ‘category’ is received the filter will bring all products).
		const snapshot = await getDocs(category ? filter : productsCollection);

		//snapshot returns: {docs: [all documents here], size: 0, empty: true/false}
		//we need iterate snapshot in order to obtain the products from docs
		const products = snapshot.docs.map((documenRef) => {
			const idFirebase = documenRef.id; //the firebase id
			const productData = documenRef.data(); //the data corresponding to the firebase id {id, description, category, .... etc}
			// replace the original id from dumyJson for the firebase id
			productData.id = idFirebase;

			return productData;
		});

		return NextResponse.json({
			message: 'Products fetched',
			error: false,
			payload: products,
		});
	} catch (error) {
		return NextResponse.json({
			message: 'Error fetching products',
			error: true,
			payload: null,
		});
	}
};

export const POST = async (req) => {
	console.log('POST method');

	// this is how you can get the body of the request
	// fetch("url", {body: JSON.stringify({key: "value"})})
	console.log(await req.json());

	return NextResponse.json({ message: 'POST method' });
};
