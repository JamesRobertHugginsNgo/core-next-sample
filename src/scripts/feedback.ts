import buildForm, { BuildFormDefinition, BuildFormOptions } from 'core-next/src/scripts/build-form.js';

const definition: BuildFormDefinition = {
	title: 'We Value Your Feedback',
	submitLabel: 'Send Feedback',

	action: 'https://echo.free.beeceptor.com/submit-feedback',
	method: 'POST',

	sections: [
		{
			rows: [
				{
					fields: [
						{
							title: 'Name',
							id: 'name',
							name: 'name'
						},
						{
							type: 'email',
							title: 'Email',
							id: 'email',
							name: 'email'
						}
					]
				},
				{
					fields: [
						{
							type: 'select',
							title: 'How satisfied are you?',
							id: 'rating',
							name: 'rating',
							required: true,
							choices: [
								{ value: '5', text: 'Very Satisfied' },
								{ value: '4', text: 'Satisfied' },
								{ value: '3', text: 'Neutral' },
								{ value: '2', text: 'Dissatisfied' },
								{ value: '1', text: 'Very Dissatisfied' }
							]
						}
					]
				},
				{
					fields: [
						{
							type: 'textarea',
							title: 'Comments',
							id: 'comments',
							name: 'comments',
							rows: 4
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
