'use client';
import createOrderInServer from '@/actions/createOrderInServer';
import Button from '@/components/Button';
import PageTitle from '@/components/PageTitle';
import { AuthContext } from '@/providers/AuthProvider';
import {
	showErrorToastCloseAction,
	showSuccessToastCloseAction,
	showWarningToast,
} from '@/utils/toasts';
import { CartContext } from '@/providers/CartProvider';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import updateStockInServer from '@/actions/updateStockInServer';

/**
 * @description returns the Payment page
 * @module app/admin/page.js
 * @returns {JSX.Element} JSX.Element - the Admin Panel page
 * @exports AdminPage
 * @requires PageTitle
 */
const PymentPage = () => {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const { cartState, setCartState } = useContext(CartContext);

	// consumes the context
	const { currentUser } = useContext(AuthContext);

	const router = useRouter();

	// According to site politics, the following code may or may not be used
	// If it is defined that the user must be 'logged in' to be able to create an order must decom
	// useEffect(() => {
	// 	if (!logedIn) {
	// 		router.push('/login');
	// 	}
	// }, [logedIn]);

	// Methods is an object that contains the functions to handle the input fields
	const methods = {
		name: setName,
		lastName: setLastName,
		email: setEmail,
		address: setAddress,
	};

	const handleChange = (e) => {
		const name = e.target.name; // name of the input field
		const value = e.target.value; // value of the input field

		methods[name](value); //Update the corresponding state -> methods[name](value) = setName(value) and methods[price](value) = setPrice(value) -> This is like you write "setName(value)" beautiful trick right?
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validations
		if (!name.trim()) {
			showWarningToast('Please enter your name');
			return;
		}
		if (!lastName.trim()) {
			showWarningToast('Please enter your last name');
			return;
		}
		if (!address.trim()) {
			showWarningToast('Please enter your shipping address');
			return;
		}
		if (!email.trim()) {
			showWarningToast('Please enter a valid email');
			return;
		}
		// Calculate the total of the cart
		const total = cartState.reduce((acc, item) => acc + item.price * item.qtyItem, 0);

		// Create the object of the order
		const newOrderObj = {
			buyer: {
				name,
				lastName,
				email,
				address,
			},
			items: cartState.map((item) => ({
				id: item.id,
				title: item.title,
				price: item.price,
				qty: item.qtyItem,
			})),
			total,
			user: currentUser ? currentUser.email : 'guest@guest.com',
		};

		// Call createOrderInServer and handle the response
		const { error } = await createOrderInServer(newOrderObj);

		if (!error) {
			// Update the stock products in database
			const dataForUpdate = cartState.map(({ id, qtyItem }) => ({ id, qtyItem }));
			updateStockInServer(dataForUpdate);
			// Clear the cart
			setCartState([]);
		}

		// Determine the toast type and action
		const toastAction = error ? showErrorToastCloseAction : showSuccessToastCloseAction;
		const toastMessage = error
			? 'Error creating the order'
			: 'Successfully created order';

		// Show toast and wait for user confirmation
		await new Promise((resolve) => toastAction(toastMessage, resolve));

		// Reset the form fields after submitting
		setName('');
		setLastName('');
		setEmail('');
		setAddress('');

		router.push('/products');
	};

	return (
		<>
			<PageTitle>Chekout Page</PageTitle>
			<form noValidate="" action="" className="p-4" onSubmit={handleSubmit}>
				<fieldset className="w-11/11 max-w-7xl flex flex-col mx-auto space-y-12 px-4 rounded-lg shadow-md bg-white">
					<div className="m-4 text-text">
						<p className="font-bold text-2xl">Order Generation</p>
					</div>
					<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-text p-4">
						<div className="col-span-full">
							<label htmlFor="name" className="text-sm">
								Name (*)
							</label>
							<input
								name="name"
								id="name"
								type="text"
								placeholder="Your name here"
								className="w-full rounded-md bg-primary/25 p-2 border-0 focus:border-2 focus:border-primary/20 focus:outline-none"
								value={name}
								onChange={handleChange}
							/>
						</div>
						<div className="col-span-full">
							<label htmlFor="lastName" className="text-sm">
								Last Name (*)
							</label>
							<input
								name="lastName"
								id="lastName"
								type="text"
								placeholder="Your lastname here"
								className="w-full rounded-md bg-primary/25 p-2 border-0 focus:border-2 focus:border-primary/20 focus:outline-none"
								value={lastName}
								onChange={handleChange}
							/>
						</div>
						<div className="col-span-full md:col-span-2">
							<label htmlFor="email" className="text-sm">
								Email (*)
							</label>
							<input
								name="email"
								id="email"
								type="email"
								placeholder="Your email here"
								className="w-full rounded-md bg-primary/25 p-2 border-0 focus:border-2 focus:border-primary/20 focus:outline-none"
								value={email}
								onChange={handleChange}
							/>
						</div>
						<div className="col-span-full">
							<label htmlFor="address" className="text-sm">
								Shipping address (*)
							</label>
							<textarea
								name="address"
								id="address"
								rows="4"
								placeholder="Enter shipping address..."
								className="w-full rounded-md bg-primary/25 p-2 border-0 focus:border-2 focus:border-primary/20 focus:outline-none"
								value={address}
								onChange={handleChange}
							/>
						</div>
						<div className="col-span-full">
							<Button className="col-span-full sm:col-span-2 my-5 p-3 min-w-1/2 bg-primary ">
								Create Order
							</Button>
						</div>
					</div>
				</fieldset>
			</form>
		</>
	);
};
export default PymentPage;
