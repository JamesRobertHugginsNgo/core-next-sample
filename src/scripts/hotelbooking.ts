import buildForm, { BuildFormDefinition, BuildFormOptions } from 'core-next/src/scripts/build-form.js';

const definition: BuildFormDefinition = {
	title: 'Hotel Booking Form',
	submitLabel: 'Submit',

	action: 'https://echo.free.beeceptor.com/book-hotel',
	method: 'post',

	sections: [
		{
			rows: [
				{
					fields: [
						{
							title: 'Guest Name',
							id: 'name',
							name: 'name',
							required: true
						}
					]
				},
				{
					fields: [
						{
							type: 'date',
							title: 'Check-in Date',
							id: 'checkin',
							name: 'checkin',
							required: true
						},
						{
							type: 'date',
							title: 'Check-out Date',
							id: 'checkout',
							name: 'checkout',
							required: true
						}
					]
				},
				{
					fields: [
						{
							type: 'select',
							title: 'Room Type',
							id: 'roomType',
							name: 'roomType',
							required: true,
							choices: [
								{ value: 'single', text: 'Single' },
								{ value: 'double', text: 'Double' },
								{ value: 'suite', text: 'Suite' }
							]
						}
					]
				},
				{
					fields: [
						{
							type: 'checkbox',
							title: 'Include Breakfast',
							id: 'breakfast',
							name: 'breakfast',
							required: true,
							choices: [
								{ value: 'yes', text: 'Yes' }
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
