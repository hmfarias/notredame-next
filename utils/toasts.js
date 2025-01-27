/**
 * @module utils/toasts.js
 * @description This file contains the functions to show toasts
 * @exports showSuccessToast
 * @exports showWarningToast
 * @exports showErrorToast
 * @requires toast
 * @description This file contains the functions to show toasts
 * The toasts are used to show notifications to the user
 * The toasts are configured in the toastify library
 */

import { toast } from 'react-toastify';

// Generic functions for different types of notifications

export const showWarningToast = (message) => {
	toast.warning(<span dangerouslySetInnerHTML={{ __html: message }} />, {
		position: 'top-right',
		autoClose: 3500,
		closeOnClick: true,
		theme: 'light',
	});
};

export const showSuccessToast = (message) => {
	toast.success(<span dangerouslySetInnerHTML={{ __html: message }} />, {
		position: 'top-right',
		autoClose: 3500,
		closeOnClick: true,
		theme: 'light',
	});
};

export const showErrorToast = (message) => {
	toast.error(<span dangerouslySetInnerHTML={{ __html: message }} />, {
		position: 'top-right',
		autoClose: 3500,
		closeOnClick: true,
		theme: 'light',
	});
};
