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
import { collection, getDocs, where, query, addDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';

// Route Handlers

//*************************************************
// GET all products from the database (server-side)
// If a category is provided, it fetches the products by category else it fetches all products
//************************************************/
export const GET = async (req) => {
	try {
		const searchParams = req.nextUrl.searchParams;
		const category = searchParams.get('category');

		// to simulate a delay in the response
		// await new Promise((resolve) => setTimeout(resolve, 3000));

		//reference to the collection in firebase
		const productsCollection = collection(db, 'products');

		// prepare the filter in case a category is received
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

		return NextResponse.json(
			{
				message: 'Products fetched successfully',
				error: false,
				payload: products,
			},
			{ status: 200 } // 200 OK
		);
	} catch (error) {
		console.error('Error fetching products:', error);
		return NextResponse.json(
			{
				message: 'Error fetching products',
				error: true,
				payload: null,
			},
			{ status: 500 }
		); // 500 Internal Server Error
	}
};

//*************************************************
// POST a new product to the database (server-side)
//************************************************/

export const POST = async (req) => {
	try {
		// Get the body of the petition
		const product = await req.json();

		// Reference to the collection in Firestore
		const productsCollection = collection(db, 'products');

		// Add the document to Firestore
		const productRef = await addDoc(productsCollection, { ...product });

		return NextResponse.json(
			{
				message: 'Product created',
				error: false,
				payload: { id: productRef.id, ...product },
			},
			{ status: 201 } // 201 Created
		);
	} catch (error) {
		console.error('Error creating the product:', error);
		return NextResponse.json(
			{
				message: 'Error creating the product',
				error: true,
				payload: null,
			},
			{ status: 500 }
		); // 500 Internal Server Error
	}
};
