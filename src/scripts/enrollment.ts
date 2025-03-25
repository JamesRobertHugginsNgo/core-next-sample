import buildForm, { BuildFormDefinition, BuildFormOptions } from 'core-next/src/scripts/build-form.js';

const definition: BuildFormDefinition = {
	title: 'Enroll in a Course',
	submitLabel: 'Enroll Now',

	action: 'https://echo.free.beeceptor.com/enroll',
	method: 'post',

	sections: [
		{
			rows: [
				{
					fields: [
						{
							title: 'Student Name',
							id: 'studentName',
							name: 'studentName',
							required: true
						},
						{
							type: 'email',
							title: 'Email Address',
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
							title: 'Choose a Course',
							id: 'course',
							name: 'course',
							required: true,
							choices: [
								{ value: '', text: 'Select' },
								{ value: 'html', text: 'Intro to HTML' },
								{ value: 'css', text: 'CSS Basics' },
								{ value: 'js', text: 'JavaScript Essentials' },
								{ value: 'php', text: 'PHP for Beginners' }
							]
						},
						{
							type: 'date',
							title: 'Preferred Start Date',
							id: 'startDate',
							name: 'startDate',
							required: true,
							cols: {
								md: 3
							}
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
