'use client';

import createNewProduct from '@/actions/createNewProduct';
import getCategoriesList from '@/actions/getCategoriesList';
import getCategoriesListFromServer from '@/actions/getCategoriesListFromServer';
import Button from '@/components/Button';
import PageTitle from '@/components/PageTitle';
import { AuthContext } from '@/providers/AuthProvider';
import { showWarningToast } from '@/utils/toasts';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

/**
 * @description returns the Admin Panel page
 * @module app/admin/page.js
 * @returns {JSX.Element} JSX.Element - the Admin Panel page
 * @exports AdminPage
 * @requires PageTitle
 */
const AdminPage = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState('');
	const [rating, setRating] = useState('');
	const [stock, setStock] = useState('');
	const [thumbnail, setThumbnail] = useState('');
	const [categories, setCategories] = useState([]);

	// consumes the context
	const { logedIn, handleLogin, handleLogout, currentUser } = useContext(AuthContext);
	const router = useRouter();

	useEffect(() => {
		if (!logedIn) {
			router.push('/login');
		}
	}, [logedIn]);

	// Methods is an object that contains the functions to handle the input fields
	const methods = {
		title: setTitle,
		description: setDescription,
		category: setCategory,
		price: setPrice,
		rating: setRating,
		stock: setStock,
		thumbnail: setThumbnail,
	};

	const handleChange = (e) => {
		const name = e.target.name; // name of the input field
		const value = e.target.value; // value of the input field

		methods[name](value); //Update the corresponding state -> methods[name](value) = setName(value) and methods[price](value) = setPrice(value) -> This is like you write "setName(value)" beautiful trick right?
	};

	// Get list of categories when mounting the component and sort them alphabetically for use in the input field
	useEffect(() => {
		const fetchCategories = async () => {
			// const { payload, error } = await getCategoriesList();
			const { payload, error } = await getCategoriesListFromServer();

			if (!error) {
				// Order the categories alphabetically by name
				const sortedCategories = payload.sort((a, b) => {
					if (a.name < b.name) return -1;
					if (a.name > b.name) return 1;
					return 0;
				});
				setCategories(sortedCategories);
			} else {
				console.error('Error fetching categories:', error);
			}
		};
		fetchCategories();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validations
		if (!title.trim()) {
			showWarningToast('Please enter a title for the product');
			return;
		}
		if (!description.trim()) {
			showWarningToast('Please enter a description for the product');
			return;
		}
		if (!category.trim()) {
			showWarningToast('Please select a category');
			return;
		}
		if (!price.trim() || isNaN(price) || parseFloat(price) <= 0) {
			showWarningToast('Please enter a valid price (greater than 0)');
			return;
		}

		const newProduct = {
			title,
			description,
			category,
			price: parseFloat(price), // Convert to number
			rating: rating ? parseFloat(rating) : 4, // If rating is empty, assign 4
			stock: parseInt(stock, 10), // Convert to number
			thumbnail: thumbnail,
		};
		// Reset the form fields after submitting
		setTitle('');
		setDescription('');
		setCategory('');
		setPrice('');
		setRating('');
		setStock('');
		setThumbnail('');

		//
		// Show load notification

		createNewProduct(newProduct);
	};

	return (
		<>
			<PageTitle> Admin Panel</PageTitle>
			<form noValidate="" action="" className="p-4" onSubmit={handleSubmit}>
				<fieldset className="w-11/12 max-w-7xl flex flex-col mx-auto space-y-12 px-4 rounded-lg shadow-md bg-white">
					<div className="m-4 text-text">
						<p className="font-bold text-2xl">Product load</p>
						<p className="text-xs">This is the space where you can load products.</p>
					</div>
					<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-text p-4">
						<div className="col-span-full">
							<label htmlFor="title" className="text-sm">
								Product Title (*)
							</label>
							<input
								name="title"
								id="title"
								type="text"
								placeholder='eg: Laptop lenovo 15"'
								className="w-full rounded-md bg-primary/25 p-2 border-0 focus:border-2 focus:border-primary/20 focus:outline-none"
								value={title}
								onChange={handleChange}
							/>
						</div>
						<div className="col-span-full">
							<label htmlFor="description" className="text-sm">
								Product Description(*)
							</label>
							<textarea
								name="description"
								id="description"
								rows="4"
								placeholder="Enter product description..."
								className="w-full rounded-md bg-primary/25 p-2 border-0 focus:border-2 focus:border-primary/20 focus:outline-none"
								value={description}
								onChange={handleChange}
							/>
						</div>
						<div className="col-span-full md:col-span-2">
							<label htmlFor="category" className="text-sm">
								Category (*)
							</label>
							<select
								name="category"
								id="category"
								className="w-full rounded-md bg-primary/25 p-2 border-0 focus:border-2 focus:border-primary/20 focus:outline-none"
								value={category}
								onChange={handleChange}
							>
								<option value="">Select a category</option>
								{categories.map((cat) => (
									<option key={cat.slug} value={cat.slug}>
										{cat.name}
									</option>
								))}
							</select>
						</div>
						<div className="col-span-full md:col-span-2">
							<label htmlFor="price" className="text-sm">
								Price (U$D) (*)
							</label>
							<input
								name="price"
								id="price"
								type="text"
								placeholder="eg: $100"
								className="w-full rounded-md bg-primary/25 p-2 border-0 focus:border-2 focus:border-primary/20 focus:outline-none"
								value={price ? `$${price}` : ''} // Shows the dollars and cents
								onChange={(e) => {
									let value = e.target.value.replace(/[^0-9.]/g, ''); // Allows only numbers and point
									value = value.replace(/^0+(?=\d)/, ''); // Eliminate initial zeros
									value = value.replace(/(\..*)\./g, '$1'); // Avoid more than one decimal point
									value = value.replace(/^(\d+)\.(\d{2}).*/, '$1.$2'); // Limits two decimals
									e.target.value = value;
									handleChange(e); // Call the original function
								}}
							/>
						</div>
						<div className="col-span-full md:col-span-2">
							<label htmlFor="stock" className="text-sm">
								Stock
							</label>
							<input
								name="stock"
								id="stock"
								type="text"
								placeholder="10"
								className="w-full rounded-md bg-primary/25 p-2 border-0 focus:border-2 focus:border-primary/20 focus:outline-none"
								value={stock !== undefined && stock !== null ? `units ${stock}` : ''} // Muestra el valor seguido de "units"
								onChange={(e) => {
									let value = e.target.value.replace(/[^0-9]/g, ''); // Allows only numbers
									value = value.replace(/^0+(?=\d)/, ''); // Eliminate initial zeros
									e.target.value = value; // Update the value in the text field
									handleChange(e); // Call the original function
								}}
							/>
						</div>
						<div className="col-span-full">
							<label htmlFor="thumbnail" className="text-sm">
								Product Thumbnail (URL)
							</label>
							<input
								name="thumbnail"
								id="thumbnail"
								type="url"
								placeholder="Enter image URL"
								className="w-full rounded-md bg-primary/25 p-2 border-0 focus:border-2 focus:border-primary/20 focus:outline-none"
								value={thumbnail}
								onChange={handleChange}
							/>
						</div>
						<Button className="col-span-full sm:col-span-2 my-5 p-3 bg-primary ">
							Save Product
						</Button>
					</div>
				</fieldset>
			</form>
		</>
	);
};

export default AdminPage;
