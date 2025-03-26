import buildForm, { BuildFormDefinition, BuildFormOptions } from 'core-next/src/scripts/build-form.js';

const definition: BuildFormDefinition = {
	title: 'Contact Form',
	submitLabel: 'Submit',

	action: 'https://echo.free.beeceptor.com/submit-form',
	method: 'POST',

	sections: [
		{
			rows: [
				{
					fields: [
						{
							title: 'Name',
							id: 'name',
							name: 'name',
							required: true
						}
					]
				},
				{
					fields: [
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
							type: 'number',
							title: 'Age',
							id: 'age',
							name: 'age',
							required: true
						},
						{
							type: 'select',
							title: 'Gender',
							id: 'gender',
							name: 'gender',
							required: true,
							choices: [
								{ value: '', text: 'Select' },
								'Male',
								'Female',
								'Other'
							]
						}
					]
				},
				{
					fields: [
						{
							type: 'textarea',
							title: 'Message',
							id: 'message',
							name: 'message',
							rows: 4,
							required: true
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
