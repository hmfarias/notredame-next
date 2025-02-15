import { toast } from 'react-toastify';

// Generic functions for different types of notifications

/**
 * @description Shows a warning notification with a message and a duration (in milliseconds). It uses the toast library from react-toastify.
 * @param {string} message - The message to be displayed in the notification.
 * @param {number} duration - The duration of the notification in milliseconds.
 * @returns {void} - The function does not return any value.
 * @module utils/toasts.js
 * @requires toast
 */
export const showWarningToast = (message, duration = 3500) => {
	toast.warning(<span dangerouslySetInnerHTML={{ __html: message }} />, {
		position: 'top-right',
		autoClose: duration,
		closeOnClick: true,
		theme: 'light',
	});
};

/**
 * @description Shows a success notification with a message and a duration (in milliseconds). It uses the toast library from react-toastify.
 * @param {string} message - The message to be displayed in the notification.
 * @param {number} duration - The duration of the notification in milliseconds.
 * @returns {void} - The function does not return any value.
 * @module utils/toasts.js
 * @requires toast
 */
export const showSuccessToast = (message, duration = 3500) => {
	toast.success(<span dangerouslySetInnerHTML={{ __html: message }} />, {
		position: 'top-right',
		autoClose: duration,
		closeOnClick: true,
		theme: 'light',
	});
};

/**
 * @description Shows an error notification with a message and a duration (in milliseconds). It uses the toast library from react-toastify.
 * @param {string} message - The message to be displayed in the notification.
 * @param {number} duration - The duration of the notification in milliseconds.
 * @returns {void} - The function does not return any value.
 * @module utils/toasts.js
 * @requires toast
 */
export const showErrorToast = (message, duration = 3500) => {
	toast.error(<span dangerouslySetInnerHTML={{ __html: message }} />, {
		position: 'top-right',
		autoClose: duration,
		closeOnClick: true,
		theme: 'light',
	});
};
