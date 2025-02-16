import { db } from '@/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';

// Route Handlers

//*************************************************
// POST a new order to the database (server-side)
//************************************************/

export const POST = async (req) => {
	try {
		// Get the body of the petition
		const order = await req.json();

		// Reference to the collection in Firestore
		const ordersCollection = collection(db, 'orders');

		// Add the document to Firestore
		const orderRef = await addDoc(ordersCollection, { ...order });

		return NextResponse.json(
			{
				message: 'Successfully created order',
				error: false,
				payload: { id: orderRef.id, ...order },
			},
			{ status: 201 } // 201 Created
		);
	} catch (error) {
		console.error('Error creating the order:', error);
		return NextResponse.json(
			{
				message: 'Error creating the order',
				error: true,
				payload: null,
			},
			{ status: 500 }
		); // 500 Internal Server Error
	}
};
