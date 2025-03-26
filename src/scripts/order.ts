import buildForm, { BuildFormDefinition, BuildFormOptions } from 'core-next/src/scripts/build-form.js';

const definition: BuildFormDefinition = {
	title: 'Product Order Form',
	submitLabel: 'Place Order',

	action: 'https://echo.free.beeceptor.com/submit-order',
	method: 'POST',

	sections: [
		{
			title: 'Customer Info',
			rows: [
				{
					fields: [
						{
							title: 'Full Name',
							invalidFeedback: 'Enter your full name',
							id: 'fullName',
							name: 'fullName',
							required: true,
							cols: {
								md: 12,
								lg: 6,
							}
						},
						{
							type: 'email',
							title: 'Email',
							invalidFeedback: 'Enter a valid email',
							id: 'email',
							name: 'email',
							required: true
						},
						{
							type: 'tel',
							title: 'Phone Number',
							invalidFeedback: 'Enter a valid phone number',
							id: 'phone',
							name: 'phone',
							required: true
						}
					]
				},
			]
		},
		{
			title: 'Order Details',
			rows: [
				{
					fields: [
						{
							type: 'select',
							title: 'Product',
							invalidFeedback: 'Select a product',
							id: 'phone',
							name: 'phone',
							required: true,
							choices: [
								{ value: '', text: 'Select a product' },
								{ value: 'widgetA', text: 'Widget A' },
								{ value: 'widgetB', text: 'Widget B' },
								{ value: 'widgetC', text: 'Widget C' }
							]
						},
						{
							type: 'number',
							title: 'Quantity',
							id: 'quantity',
							min: 1,
							name: 'quantity',
							required: true,
							value: 1,
							cols: {
								md: 3
							}
						}
					]
				},
				{
					fields: [
						{
							type: 'radio',
							title: 'Shipping Method',
							id: 'shipping',
							name: 'shipping',
							value: 'standard',
							choices: [
								{ value: 'standard', text: 'Standard' },
								{ value: 'express', text: 'Express' }
							]
						}
					]
				},
				{
					fields: [
						{
							type: 'textarea',
							title: 'Additional Notes',
							id: 'notes',
							name: 'notes',
							rows: 3
						}
					]
				}
			]
		}
	]
};
const options: BuildFormOptions = {};
const formElement = buildForm(definition, options);

document.getElementById('container')?.append(formElement);
