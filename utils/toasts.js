'use client';
import Button from '@/components/Button';
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

/**
 * @description Shows an loading notification with a message
 * @param {string} message - The message to be displayed in the notification.
 * @returns {void} - The function does not return any value.
 * @module utils/toasts.js
 * @requires toast
 */
export const showLoadingToast = (message) => {
	toast.loading(message, {
		position: 'top-right',
		autoClose: false,
		closeOnClick: false,
		theme: 'light',
	});
};

/**
 * @description shows a success toast  with the closing button and driving the overlay
 * @param {string} message - The successful message to be shown in the toast.
 * @param {Function} onClick - The function that will be executed when the user clicks the toast button.
 * @requires toast
 */
export const showSuccessToastCloseAction = (message, onCloseAction) => {
	// make sure that it is only executed in the client
	if (typeof window !== 'undefined') {
		const toastId = toast.success(
			<div className="flex items-center justify-between w-full">
				<span>{message}</span>
				<Button
					onClick={() => {
						toast.dismiss(toastId); // Close the toast
						removeOverlay(); // Eliminate Overlay
						if (onCloseAction) onCloseAction(); // Execute past action
					}}
					className="ml-4 text-sm font-semibold text-background p-2 bg-primary min-w-20"
				>
					Close
				</Button>
			</div>,
			{
				position: 'top-right',
				autoClose: false, // It does not close automatically
				closeOnClick: false, // It does not close when clicking on the toast
				theme: 'light',
			}
		);

		// Add overlay when the toast is shown
		addOverlay();
	}
};

/**
 * Show an error toast and wait for user intervention before executing an action.
 * @param {string} message - The error message that will be displayed in the toast.
 * @param {Function} onCloseAction - The action that will be executed when the user clicks on the toast
 * @requires toast
 */
export const showErrorToastCloseAction = (message, onCloseAction) => {
	// make sure that it is only executed in the client
	if (typeof window !== 'undefined') {
		const toastId = toast.error(
			<div className="flex items-center justify-between w-full">
				<span>{message}</span>
				<Button
					onClick={() => {
						toast.dismiss(toastId); // Close the toast
						removeOverlay(); // Eliminate Overlay
						if (onCloseAction) onCloseAction(); // Execute past action
					}}
					className="ml-4 text-sm font-semibold text-background p-2 bg-primary min-w-20"
				>
					Close
				</Button>
			</div>,
			{
				position: 'top-right',
				autoClose: false, // It does not close automatically
				closeOnClick: false, // It does not close when clicking on the toast
				theme: 'light',
			}
		);

		// Add overlay when the toast is shown
		addOverlay();
	}
};

/**
 * @description Dismiss all toasts
 * @returns {void} - The function does not return any value.
 * @module utils/toasts.js
 * @requires toast
 */
export const dismissToasts = () => {
	toast.dismiss();
};

// Function to add the overlay
const addOverlay = () => {
	if (typeof window !== 'undefined') {
		// Create Overlay
		const overlay = document.createElement('div');
		overlay.className = 'fixed inset-0 bg-gray-500 opacity-50 z-50'; // Overlay styles
		document.body.appendChild(overlay);

		// Create the modal
		const modalWrapper = document.createElement('div');
		modalWrapper.className = 'flex justify-center items-center fixed inset-0 z-50';

		document.body.appendChild(modalWrapper);

		// By clicking on the overlay, close the toast and eliminate the overlay
		overlay.onclick = () => {
			removeOverlay(); // Eliminate Overlay
			toast.dismiss(); // Close the toast
		};
	}
};

// Function to eliminate overlay
const removeOverlay = () => {
	if (typeof window !== 'undefined') {
		// Select the created elements and delete them from Dom
		const overlays = document.querySelectorAll('.fixed.inset-0.bg-gray-500');
		overlays.forEach((overlay) => overlay.remove());

		const modalWrappers = document.querySelectorAll('.flex.justify-center.items-center');
		modalWrappers.forEach((modalWrapper) => modalWrapper.remove());
	}
};
