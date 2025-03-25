import buildForm, { BuildFormDefinition, BuildFormOptions } from 'core-next/src/scripts/build-form.js';

const definition: BuildFormDefinition = {
	title: 'Job Application Form',
	submitLabel: 'Submit',

	action: 'https://echo.free.beeceptor.com/apply-job',
	method: 'post',

	sections: [
		{
			rows: [
				{
					fields: [
						{
							title: 'Full Name',
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
				}
				
			]
		}
	]
};
const options: BuildFormOptions = {};
const formElement = buildForm(definition, options);

document.getElementById('container')?.append(formElement);
