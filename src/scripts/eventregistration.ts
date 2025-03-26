import buildForm, { BuildFormDefinition, BuildFormOptions } from 'core-next/src/scripts/build-form.js';

const definition: BuildFormDefinition = {
	title: 'Register for the Event',
	submitLabel: 'Register',

	action: 'https://echo.free.beeceptor.com/register-event',
	method: 'POST',

	sections: [
		{
			rows: [
				{
					fields: [
						{
							title: 'Full Name:',
							id: 'fullName',
							name: 'fullName',
							required: true
						},
						{
							type: 'email',
							title: 'Email',
							id: 'email',
							name: 'email',
							required: true
						}
					]
				},
				{
					fields: [
						{
							type: 'select',
							title: 'Ticket Type',
							id: 'ticket',
							name: 'ticket',
							required: true,
							choices: [
								{ value: 'standard', text: 'Standard - Free' },
								{ value: 'vip', text: 'VIP - $50' }
							]
						}
					]
				},
				{
					fields: [
						{
							type: 'radio',
							title: 'Meal Preference',
							id: 'meal',
							name: 'meal',
							required: true,
							choices: [
								{ value: 'veg', text: 'Vegetarian' },
								{ value: 'nonveg', text: 'Non-Vegetarian' }
							]
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
