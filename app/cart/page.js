/**
 * @module app/cart/page.js
 * @returns {JSX.Element} JSX.Element - the Cart page
 * @exports CartPage
 * @requires PageTitle
 * @description The Cart page
 */

import PageTitle from '@/components/PageTitle';
import React from 'react';

const CartPage = () => {
	return (
		<>
			<PageTitle>My Cart</PageTitle>
		</>
	);
};
export default CartPage;
