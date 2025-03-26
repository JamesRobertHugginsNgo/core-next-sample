import buildForm, { BuildFormDefinition, BuildFormOptions } from 'core-next/src/scripts/build-form.js';

const definition: BuildFormDefinition = {
	title: 'Job Application Form',
	submitLabel: 'Submit Application',

	action: 'https://echo.free.beeceptor.com/apply-job',
	enctype: 'multipart/form-data',
	method: 'POST',

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
				},
				{
					fields: [
						{
							title: 'Position Applying For',
							id: 'position',
							name: 'position',
							required: true
						}
					]
				},
				{
					fields: [
						{
							type: 'file',
							title: 'Upload Resume',
							id: 'resume',
							name: 'resume',
							required: true
						}
					]
				},
				{
					fields: [
						{
							type: 'textarea',
							title: 'Cover Letter',
							id: 'coverLetter',
							name: 'coverLetter'
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
