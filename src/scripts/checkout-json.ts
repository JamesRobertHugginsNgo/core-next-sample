import buildForm, { BuildFormDefinition, BuildFormOptions } from 'core-next/src/scripts/build-form.js';

const definition: BuildFormDefinition = {
	title: 'Checkout JSON',
	submitLabel: 'Place Order',

	action: 'https://echo.free.beeceptor.com/complete-purchase-json',
	method: 'post',

	submitAsJson: true,
	submitAsJsonSuccessUrl: './thank-you.html',
	submitAsJsonErrorUrl: './error.html',

	sections: [
		{
			rows: [
				{
					fields: [
						{
							title: 'Cardholder Name',
							id: 'cardName',
							name: 'cardName',
							required: true
						}
					]
				},
				{
					fields: [
						{
							title: 'Card Number',
							id: 'cardNumber',
							maxlength: 16,
							name: 'cardNumber',
							required: true
						}
					]
				},
				{
					fields: [
						{
							type: 'date',
							title: 'Expiry Date',
							id: 'expiry',
							name: 'expiry',
							required: true
						},
						{
							title: 'CVV',
							id: 'cvv',
							maxlength: 3,
							name: 'cvv',
							required: true
						}
					]
				},
				{
					fields: [
						{
							type: 'textarea',
							title: 'Billing Address',
							id: 'billingAddress',
							name: 'billingAddress',
							required: true,
							rows: 2
						}
					]
				},
			]
		}
	]
};
const options: BuildFormOptions = {};
const formElement = buildForm(definition, options);

document.getElementById('container')?.append(formElement);
