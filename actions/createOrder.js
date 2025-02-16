import { showErrorToastCloseAction, showSuccessToastCloseAction } from '@/utils/toasts';
import { toast } from 'react-toastify';

/**
 * @description This function creates a new order in the API. It sends a POST request to the '/api/orders' endpoint with the order object as the request body. If the request is successful, the function returns the response from the API.If there is an error, it returns an error message.
 * @module actions/createOrder.js
 * @param {Object} order - The order object to be created
 * @returns {Object} - The response from the API
 * @exports createOrder
 */
const createOrder = async (order) => {
	const endpoint = 'http://localhost:3000/api/orders';
	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json', // Indicate that the request body to send is a JSON object
			},
			body: JSON.stringify(order),
		});

		const { payload, message, error } = await response.json();

		if (error) {
			// Show the error toast and wait for user intervention
			await new Promise((resolve) => {
				showErrorToastCloseAction(message, resolve); //solve the promise when the user closes the toast
			});
			return false;
		}

		//Show the success toast and wait until the user closes it
		await new Promise((resolve) => {
			showSuccessToastCloseAction(message, resolve); //solve the promise when the user closes the toast
		});

		return true;
	} catch (error) {
		// Show the error toast and wait for user intervention
		await new Promise((resolve) => {
			showErrorToastCloseAction('Error creating the order. ' + error, resolve); //solve the promise when the user closes the toast
		});
		return false;
	}
};
export default createOrder;
